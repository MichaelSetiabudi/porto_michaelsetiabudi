# About Page Components

Folder ini berisi komponen-komponen yang telah dipisahkan dari file `Main.tsx` untuk halaman About. Setiap komponen memiliki tanggung jawab yang spesifik dan dapat digunakan secara terpisah.

## Struktur File

### Komponen Utama
- **`Main.tsx`** - Komponen utama yang mengintegrasikan semua section
- **`HeroSection.tsx`** - Section hero/banner dengan nama dan profil
- **`AboutSection.tsx`** - Section tentang deskripsi pribadi
- **`TechnicalSkillsSlider.tsx`** - Slider untuk menampilkan skills teknis
- **`ContactSection.tsx`** - Section kontak dan email

### Komponen Pendukung
- **`SocialLink.tsx`** - Komponen untuk link sosial media (GitHub, LinkedIn)
- **`AnimatedProfileImage.tsx`** - Komponen gambar profil dengan animasi

### Utilitas
- **`types.ts`** - Interface dan type definitions
- **`animations.ts`** - Konfigurasi animasi framer-motion
- **`themeHelpers.ts`** - Helper functions untuk styling berdasarkan theme
- **`index.ts`** - Export semua komponen untuk memudahkan import

## Cara Penggunaan

### Import Komponen Individual
```tsx
import { HeroSection, AboutSection } from './about';
```

### Import Main Component
```tsx
import { Main } from './about';
```

### Import Helper Functions
```tsx
import { useThemeHelpers } from './about/themeHelpers';
```

## Fitur Utama

### 1. HeroSection
- Animasi hero dengan background gradients
- Profil image dengan animasi floating
- Social media links
- Responsive design

### 2. AboutSection
- Deskripsi pribadi dan profesional
- Card styling dengan backdrop blur
- Theme-aware styling

### 3. TechnicalSkillsSlider
- Carousel skills dengan 5 kategori
- Desktop: 3-card preview dengan center focus
- Mobile: Single card dengan navigation
- Auto-slide functionality
- Progress indicator dan navigation dots
- Smooth transitions dan animations

### 4. ContactSection
- Email contact dengan hover effects
- Gradient styling
- Call-to-action section

### 5. Theme Support
- Dark/Light theme support di semua komponen
- Dynamic styling berdasarkan theme context
- Smooth theme transitions

## Keuntungan Pemisahan

1. **Modularity** - Setiap komponen bisa digunakan independen
2. **Maintainability** - Lebih mudah maintenance dan debugging
3. **Reusability** - Komponen bisa digunakan di halaman lain
4. **Code Organization** - Kode lebih terorganisir dan mudah dibaca
5. **Performance** - Lazy loading dan tree shaking yang lebih efektif

## Dependencies

- React
- Framer Motion
- Next.js
- Lucide React (icons)
- Tailwind CSS
