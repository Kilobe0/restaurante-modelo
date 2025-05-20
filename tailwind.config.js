// tailwind.config.js (exemplo de adição de cores)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFD1A3', // um laranja claro
          DEFAULT: '#FF9F40', // laranja principal
          dark: '#D47D26',  // laranja escuro
        },
        secondary: '#4A5568', // um cinza azulado
        // ... outras cores personalizadas
      },
      fontFamily: {
        // Se você adicionar fontes personalizadas via @font-face ou Google Fonts
        // 'sans': ['"Nome da Fonte Sans"', 'sans-serif'],
        // 'serif': ['"Nome da Fonte Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};