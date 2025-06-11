// src/app/dev/debug/page.tsx
import CSSDebug from '@/app/components/dev/CSSDebug';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSS Debug - Tailwind Configuration Test',
  description: 'Debug page to test Tailwind CSS configuration and color rendering',
  robots: 'noindex, nofollow',
};

export default function DebugPage() {
  return <CSSDebug />;
}
