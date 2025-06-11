// src/app/components/dev/ColorPalette.tsx
'use client';

interface ColorSwatchProps {
  name: string;
  value: string;
  className: string;
  textColor?: string;
}

function ColorSwatch({ name, value, className, textColor = 'text-foreground' }: ColorSwatchProps) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg border border-pearl-500 shadow-sm">
      <div className={`w-20 h-20 rounded-lg border-2 border-gray-300 ${className} mb-3`}></div>
      <div className="text-center">
        <p className={`font-semibold text-sm ${textColor}`}>{name}</p>
        <p className="text-xs text-text-muted font-mono">{value}</p>
      </div>
    </div>
  );
}

export default function ColorPalette() {
  const primaryColors = [
    { name: 'Primary', value: '#a6a867', className: 'bg-primary' },
    { name: 'Primary Light', value: '#b7b985', className: 'bg-primary-light' },
    { name: 'Primary Dark', value: '#87894f', className: 'bg-primary-dark' },
  ];

  const secondaryColors = [
    { name: 'Secondary', value: '#51513d', className: 'bg-secondary' },
    { name: 'Secondary Light', value: '#7b7b5d', className: 'bg-secondary-light' },
    { name: 'Secondary Dark', value: '#414131', className: 'bg-secondary-dark' },
  ];

  const accentColors = [
    { name: 'Accent', value: '#e3dc95', className: 'bg-accent' },
    { name: 'Accent Dark', value: '#d3c95b', className: 'bg-accent-dark' },
  ];

  const backgroundColors = [
    { name: 'Background', value: '#faf8f3', className: 'bg-background' },
    { name: 'Card Background', value: '#ffffff', className: 'bg-card-bg' },
    { name: 'Footer Background', value: '#161a1b', className: 'bg-footer-bg', textColor: 'text-on-dark-bg' },
  ];

  const textColors = [
    { name: 'Foreground', value: '#1b2021', className: 'bg-foreground', textColor: 'text-on-dark-bg' },
    { name: 'Light Text', value: '#445153', className: 'bg-light-text', textColor: 'text-on-dark-bg' },
    { name: 'Text Muted', value: '#445153', className: 'bg-text-muted', textColor: 'text-on-dark-bg' },
  ];

  const semanticTextColors = [
    { name: 'Text on Primary', value: '#1b2021', className: 'bg-text-on-primary', textColor: 'text-on-dark-bg' },
    { name: 'Text on Secondary', value: '#faf8f3', className: 'bg-text-on-secondary' },
    { name: 'Text on Accent', value: '#1b2021', className: 'bg-text-on-accent', textColor: 'text-on-dark-bg' },
    { name: 'Text on Dark BG', value: '#f4f1e7', className: 'bg-text-on-dark-bg' },
    { name: 'Text Muted on Dark', value: '#c9cba4', className: 'bg-text-muted-on-dark' },
  ];

  const overlayColors = [
    { name: 'Overlay Gallery', value: '#1b20214D', className: 'bg-overlay-gallery', textColor: 'text-on-dark-bg' },
    { name: 'Overlay Hero', value: '#1b202199', className: 'bg-overlay-hero', textColor: 'text-on-dark-bg' },
  ];

  const originalPalette = [
    { name: 'Eerie Black', value: '#1b2021', className: 'bg-eerie_black-500', textColor: 'text-on-dark-bg' },
    { name: 'Ebony', value: '#51513d', className: 'bg-ebony-500', textColor: 'text-on-dark-bg' },
    { name: 'Moss Green', value: '#a6a867', className: 'bg-moss_green-500' },
    { name: 'Vanilla', value: '#e3dc95', className: 'bg-vanilla-500' },
    { name: 'Pearl', value: '#e3dcc2', className: 'bg-pearl-500' },
  ];

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-foreground mb-12">
          Color Palette Reference
        </h1>
        
        <div className="space-y-12">
          {/* Primary Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Primary Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Secondary Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Secondary Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Accent Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Accent Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {accentColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Background Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Background Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {backgroundColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Text Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Text Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {textColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Semantic Text Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Semantic Text Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {semanticTextColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Overlay Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Overlay Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {overlayColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Original Palette */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Original Palette</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {originalPalette.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Usage Guidelines */}
          <section className="bg-card-bg p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Usage Guidelines</h2>
            <div className="space-y-4 text-foreground">
              <div>
                <h3 className="text-lg font-semibold mb-2">Semantic Colors</h3>
                <p className="text-text-muted">Use semantic color variables (primary, secondary, accent, etc.) instead of direct color references for better maintainability.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Text Contrast</h3>
                <p className="text-text-muted">Always use appropriate text-on-* classes to ensure proper contrast ratios for accessibility.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Overlays</h3>
                <p className="text-text-muted">Use overlay-gallery and overlay-hero instead of bg-opacity combinations for consistent transparency effects.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
