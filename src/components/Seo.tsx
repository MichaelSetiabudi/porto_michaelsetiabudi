import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");

export default function Seo({
  title,
  description,
  image = "/og.png",
}: {
  title: string;
  description: string;
  image?: string;
}) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : undefined;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Michael Setiabudi" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
