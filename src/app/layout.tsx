// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Supondo que estas são suas fontes Geist
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const geistSans = Geist({ // Se você estiver usando next/font/google, seria algo como:
// const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '700'] // Exemplo de pesos, ajuste conforme necessário
});

const geistMono = Geist_Mono({ // Se você estiver usando next/font/google, seria algo como:
// const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['400', '700'] // Exemplo de pesos
});

// URL base do seu site (importante para metadata)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Define a URL base para metadados relativos
  title: {
    default: "Restaurante Saboroso | Culinária Autêntica e Ambiente Acolhedor", // Título padrão
    template: "%s | Restaurante Saboroso", // Template para títulos de páginas específicas
  },
  description: "Descubra os sabores únicos do Restaurante Saboroso. Oferecemos pratos deliciosos feitos com ingredientes frescos em um ambiente perfeito para todas as ocasiões. Faça sua reserva!",
  keywords: ["restaurante", "comida", "culinária", "gourmet", "jantar", "almoço", "reservas", "saboroso"],
  // Open Graph / Facebook
  openGraph: {
    title: "Restaurante Saboroso",
    description: "Culinária autêntica em um ambiente acolhedor.",
    url: siteUrl,
    siteName: "Restaurante Saboroso",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`, // Crie esta imagem em public/images/og-image.jpg (1200x630px)
        width: 1200,
        height: 630,
        alt: "Prato delicioso do Restaurante Saboroso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Restaurante Saboroso",
    description: "Culinária autêntica em um ambiente acolhedor.",
    images: [`${siteUrl}/images/og-image.jpg`], // Crie esta imagem
    // creator: "@seuTwitterHandle", // Se tiver
  },
  // Favicons - O Next.js pega automaticamente de /public, mas você pode especificar aqui também se quiser
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-100 text-gray-800`} // Adicionado bg-gray-100 e text-gray-800 como base
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}