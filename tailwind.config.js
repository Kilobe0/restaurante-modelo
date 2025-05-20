// tailwind.config.js
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
        // Sua nova paleta
        eerie_black: {
          DEFAULT: '#1b2021',
          100: '#060707',
          200: '#0b0d0d',
          300: '#111414',
          400: '#161a1b',
          500: '#1b2021',
          600: '#445153',
          700: '#6c8084',
          800: '#9cabae',
          900: '#ced5d7',
        },
        ebony: {
          DEFAULT: '#51513d',
          100: '#10100c',
          200: '#212119',
          300: '#313125',
          400: '#414131',
          500: '#51513d',
          600: '#7b7b5d',
          700: '#a0a081',
          800: '#c0c0ab',
          900: '#dfdfd5',
        },
        moss_green: {
          DEFAULT: '#a6a867',
          100: '#222214',
          200: '#444527',
          300: '#66673b',
          400: '#87894f',
          500: '#a6a867',
          600: '#b7b985',
          700: '#c9cba4',
          800: '#dbdcc2',
          900: '#edeee1',
        },
        vanilla: {
          DEFAULT: '#e3dc95',
          100: '#3c3810',
          200: '#777020',
          300: '#b3a830',
          400: '#d3c95b',
          500: '#e3dc95',
          600: '#e9e4ab',
          700: '#eeeac0',
          800: '#f4f1d5',
          900: '#f9f8ea',
        },
        pearl: {
          DEFAULT: '#e3dcc2',
          100: '#3a331b',
          200: '#746635',
          300: '#ae9a50',
          400: '#c9bb8a',
          500: '#e3dcc2',
          600: '#e9e4cf',
          700: '#efeadb',
          800: '#f4f1e7',
          900: '#faf8f3',
        },
        // Mapeamento semântico para facilitar o uso (sugestão)
        // Você pode escolher quais cores da sua paleta se encaixam melhor aqui
        primary: '#a6a867', // moss_green.DEFAULT
        'primary-light': '#b7b985', // moss_green.600
        'primary-dark': '#87894f',  // moss_green.400
        secondary: '#51513d', // ebony.DEFAULT
        'secondary-light': '#7b7b5d', // ebony.600
        'secondary-dark': '#414131', // ebony.400
        accent: '#e3dc95', // vanilla.DEFAULT
        'accent-dark': '#d3c95b', // vanilla.400
        background: '#faf8f3', // pearl.900 (um tom bem claro para fundo geral)
        foreground: '#1b2021', // eerie_black.DEFAULT (para texto principal)
        'light-text': '#445153', // eerie_black.600 (para texto secundário)
        'card-bg': '#ffffff', // Branco para cards, para contraste
        'footer-bg': '#161a1b', // eerie_black.400 (um tom escuro para o footer)
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'], // Usando a variável da fonte
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Se for usar aspect-w- e aspect-h- na galeria
  ],
};