// src/app/components/dev/CSSDebug.tsx
'use client';

export default function CSSDebug() {
  return (
    <div className="p-8 bg-background">
      <h2 className="text-2xl font-bold text-foreground mb-6">CSS Debug - Color Rendering Test</h2>
      
      {/* Test Primary Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Primary Colors</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-primary rounded flex items-center justify-center">
            <span className="text-on-primary text-xs font-bold">Primary</span>
          </div>
          <div className="w-20 h-20 bg-primary-light rounded flex items-center justify-center">
            <span className="text-on-primary text-xs font-bold">Light</span>
          </div>
          <div className="w-20 h-20 bg-primary-dark rounded flex items-center justify-center">
            <span className="text-on-primary text-xs font-bold">Dark</span>
          </div>
        </div>
      </div>

      {/* Test Secondary Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Secondary Colors</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-secondary rounded flex items-center justify-center">
            <span className="text-on-secondary text-xs font-bold">Secondary</span>
          </div>
          <div className="w-20 h-20 bg-secondary-light rounded flex items-center justify-center">
            <span className="text-on-secondary text-xs font-bold">Light</span>
          </div>
          <div className="w-20 h-20 bg-secondary-dark rounded flex items-center justify-center">
            <span className="text-on-secondary text-xs font-bold">Dark</span>
          </div>
        </div>
      </div>

      {/* Test Accent Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Accent Colors</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="w-20 h-20 bg-accent rounded flex items-center justify-center">
            <span className="text-on-accent text-xs font-bold">Accent</span>
          </div>
          <div className="w-20 h-20 bg-accent-dark rounded flex items-center justify-center">
            <span className="text-on-accent text-xs font-bold">Dark</span>
          </div>
        </div>
      </div>

      {/* Test Overlay Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Overlay Colors</h3>
        <div className="relative">
          <div className="w-full h-32 bg-gradient-to-r from-primary to-accent rounded mb-4"></div>
          <div className="absolute inset-0 bg-overlay-gallery rounded flex items-center justify-center">
            <span className="text-white font-bold">Gallery Overlay</span>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-32 bg-gradient-to-r from-secondary to-primary rounded"></div>
          <div className="absolute inset-0 bg-overlay-hero rounded flex items-center justify-center">
            <span className="text-white font-bold">Hero Overlay</span>
          </div>
        </div>
      </div>

      {/* Test Text Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Text Colors</h3>
        <div className="space-y-2">
          <p className="text-foreground">Foreground text</p>
          <p className="text-text-muted">Muted text</p>
          <p className="text-light-text">Light text</p>
          <div className="bg-footer-bg p-4 rounded">
            <p className="text-on-dark-bg">Text on dark background</p>
          </div>
        </div>
      </div>

      {/* Test Background Colors */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Background Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card-bg p-4 rounded border">
            <p className="text-foreground">Card Background</p>
          </div>
          <div className="bg-background p-4 rounded border">
            <p className="text-foreground">Main Background</p>
          </div>
          <div className="bg-footer-bg p-4 rounded">
            <p className="text-on-dark-bg">Footer Background</p>
          </div>
        </div>
      </div>

      {/* CSS Variables Test */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">CSS Variables Test</h3>
        <div className="bg-card-bg p-4 rounded border">
          <p style={{ fontFamily: 'var(--font-sans)' }}>Font Sans Variable</p>
          <p style={{ fontFamily: 'var(--font-mono)' }} className="font-mono">Font Mono Variable</p>
        </div>
      </div>
    </div>
  );
}
