// src/app/dev/colors/page.tsx
import ColorPalette from '@/app/components/dev/ColorPalette';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Palette Reference',
  description: 'Development reference for the restaurant template color system',
  robots: 'noindex, nofollow', // Prevent indexing of dev pages
};

export default function ColorsPage() {
  return <ColorPalette />;
}
