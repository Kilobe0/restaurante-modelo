// src/app/dev/diagnostic/page.tsx
import ConfigDiagnostic from '@/app/components/dev/ConfigDiagnostic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tailwind Configuration Diagnostic',
  description: 'Comprehensive diagnostic for Tailwind CSS configuration and color system',
  robots: 'noindex, nofollow',
};

export default function DiagnosticPage() {
  return <ConfigDiagnostic />;
}
