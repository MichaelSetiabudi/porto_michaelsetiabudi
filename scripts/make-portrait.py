"""
Cut the pure-white studio background off public/ms_pic.jpeg and write two
web-ready RGBA assets. The original JPEG is never modified or removed.

  ms_pic_cutout.png       light theme — the figure as photographed
  ms_pic_cutout_dark.png  dark theme  — low-key grade so the near-black suit
                          reads against a dark page

Matte: the background is one connected region of pure #ffffff, so a flood
fill from the border finds it exactly and the enclosed white shirt survives.

Two things matter for a clean edge and both were got wrong on the first pass:

  1. Alpha cannot be derived from how white a pixel is. Along the silhouette
     the figure is dark jacket in some places and light skin in others, so any
     whiteness ramp either keeps a grey fringe or eats the hands. Instead the
     matte is choked a few pixels past the JPEG transition and then feathered
     back — the contaminated pixels are removed rather than corrected.

  2. Resizing has to happen in premultiplied alpha. Scaling straight RGB drags
     the white edge pixels into their neighbours, which is what put a bright
     outline around the arm and hair.
"""
import os
import numpy as np
from PIL import Image
from scipy import ndimage

SRC = "public/ms_pic.jpeg"
OUT_LIGHT = "public/ms_pic_cutout.png"
OUT_DARK = "public/ms_pic_cutout_dark.png"
TARGET_W = 800        # covers a ~392px slot at 2x
ASPECT = 0.66         # three-quarter portrait; full length is too tall a column

# The white backdrop flares light around the subject. Measured inward from the
# silhouette, mean luminance inside the jacket runs 195 at 1-3px, 62 at 3-6px,
# 38 at 6-10px, then settles to the true interior value of ~30 by about 24px.
# So the edge is choked past the worst of it and the mild remainder is
# subtracted off as the spill it is.
CHOKE = 9
SPILL, SPILL_FALLOFF = 9.0, 16.0

rgb = np.asarray(Image.open(SRC).convert("RGB"), float)
H, W, _ = rgb.shape

# ---- matte ------------------------------------------------------------------
white = rgb.min(axis=2) >= 250
lbl, n = ndimage.label(white)
border = set(np.unique(np.concatenate([lbl[0], lbl[-1], lbl[:, 0], lbl[:, -1]]))) - {0}

# One hand is in a pocket, so the gap between that arm and the torso is a
# closed loop of backdrop the border fill never reaches. It has to go too.
# Blown highlights on the dress shirt are also enclosed and pure white, so the
# two are told apart by size: the arm gap is ~63k px, everything else is under
# a thousand. Anything past HOLE_MIN is backdrop.
HOLE_MIN = 10_000
holes = [
    i for i in range(1, n + 1) if i not in border and (lbl == i).sum() >= HOLE_MIN
]
if holes:
    print(f"matte: {len(holes)} enclosed backdrop gap(s) removed")
bg = np.isin(lbl, list(border) + holes)
core = ndimage.binary_erosion(~bg, iterations=CHOKE)

# Every real part of the figure is attached to the body, so anything that is
# not the largest blob is dust on the backdrop.
blobs, nb = ndimage.label(core)
if nb > 1:
    sizes = ndimage.sum(np.ones_like(blobs), blobs, range(1, nb + 1))
    core = blobs == (1 + int(np.argmax(sizes)))
    print(f"matte: dropped {nb - 1} stray speck(s)")

alpha = ndimage.gaussian_filter(core.astype(float), 1.4)
alpha = np.clip((alpha - 0.35) / 0.30, 0, 1)

# Subtract the residual backdrop spill still riding on the pixels just inside
# the choked edge.
dist = ndimage.distance_transform_edt(core)
rgb = np.clip(rgb - SPILL * np.exp(-np.maximum(dist - 1.0, 0) / SPILL_FALLOFF)[..., None], 0, 255)

# ---- crop -------------------------------------------------------------------
solid = alpha > 0.5
cols, rows = np.where(solid.any(axis=0))[0], np.where(solid.any(axis=1))[0]
x0, x1, y0 = cols[0], cols[-1], rows[0]
mx = int(0.055 * (x1 - x0))
x0, x1 = max(0, x0 - mx), min(W, x1 + mx + 1)
y0 = max(0, y0 - int(0.085 * (rows[-1] - y0)))
y1 = min(H, y0 + int(round((x1 - x0) / ASPECT)))
rgb, alpha = rgb[y0:y1, x0:x1], alpha[y0:y1, x0:x1]
h, w = alpha.shape
print(f"crop {W}x{H} -> {w}x{h} ({w/h:.2f})  figure fills {100*(alpha>0.5).mean():.1f}%")


def save(rgb_, alpha_, path):
    """Resize in premultiplied alpha, then unpremultiply."""
    a = np.clip(alpha_, 0, 1)
    premul = np.clip(rgb_, 0, 255) * a[..., None]
    size = (TARGET_W, int(round(h * TARGET_W / w)))
    pm = np.asarray(
        Image.fromarray(premul.astype("uint8")).resize(size, Image.LANCZOS), float
    )
    am = np.asarray(
        Image.fromarray((a * 255).astype("uint8")).resize(size, Image.LANCZOS), float
    ) / 255.0
    out = np.clip(pm / np.maximum(am[..., None], 1e-4), 0, 255)
    im = Image.fromarray(out.astype("uint8")).convert("RGBA")
    im.putalpha(Image.fromarray((am * 255).astype("uint8")))
    im.save(path, optimize=True)
    print(f"{path}  {os.path.getsize(path)/1024:.0f} KB  {size[0]}x{size[1]}")


save(rgb, alpha, OUT_LIGHT)

# ---- dark grade -------------------------------------------------------------
# Gain as well as offset, so shadow contrast is expanded rather than flattened;
# the weight decays before midtones so skin is untouched. No rim light: a bright
# band hugging the silhouette is an outer glow however it is dressed up.
GAIN, OFFSET, K = 1.28, 16.0, 58.0
wt = np.exp(-((rgb / K) ** 2))
save(np.clip(rgb * (1 - wt) + (rgb * GAIN + OFFSET) * wt, 0, 255), alpha, OUT_DARK)

print("original untouched:", os.path.exists(SRC))
