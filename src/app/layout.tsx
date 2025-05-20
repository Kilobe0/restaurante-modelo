// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'] // Ajuste os pesos que você realmente usa
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['400', '500']
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Restaurante Sabor Caseiro | Tradição e Sabor em Cada Prato", // Nome mais genérico para o template
    template: "%s | Restaurante Sabor Caseiro",
  },
  description: "Descubra a autêntica culinária no Restaurante Sabor Caseiro. Pratos feitos com ingredientes frescos e carinho, em um ambiente acolhedor. Faça sua reserva!",
  keywords: ["restaurante", "comida caseira", "culinária tradicional", "sabor", "jantar", "almoço", "reservas"],
  openGraph: {
    title: "Restaurante Sabor Caseiro",
    description: "O melhor da comida caseira, feita com amor.",
    url: siteUrl,
    siteName: "Restaurante Sabor Caseiro",
    images: [
      {
        url: `${siteUrl}/images/default-og-image.jpg`, // CRIE ESTA IMAGEM: public/images/default-og-image.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Prato delicioso do Restaurante Sabor Caseiro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurante Sabor Caseiro",
    description: "O melhor da comida caseira, feita com amor.",
    images: [`${siteUrl}/images/default-og-image.jpg`],
  },
  icons: { // Para favicons
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth"> {/* Adicionado scroll-smooth */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20"> {/* Ajuste o pt para compensar a altura do Navbar fixo */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}