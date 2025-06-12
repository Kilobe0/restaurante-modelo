// src/app/layout.tsx
import type { Metadata } from "next";
// Corrigido para importar diretamente do pacote, as outras importações não são necessárias
// se você estiver usando as variáveis CSS como no exemplo
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

// URL base do seu site (importante para metadata)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eufrásio Gourmet | Tradição e Sabor em Cada Prato",
    template: "%s | Eufrásio Gourmet",
  },
  description: "Descubra a autêntica culinária no Eufrásio Gourmet. Buffet variado com culinária japonesa, carnes grelhadas, frango caipira, feijão tropeiro, sushi e frutos do mar. Faça sua reserva!",
  keywords: ["restaurante", "eufrásio gourmet", "buffet variado", "culinária japonesa", "sushi", "frutos do mar", "feijão tropeiro", "sete lagoas"],
  openGraph: {
    title: "Eufrásio Gourmet",
    description: "Buffet variado com culinária japonesa, carnes grelhadas e muito mais.",
    url: siteUrl,
    siteName: "Eufrásio Gourmet",
    images: [
      {
        url: `${siteUrl}/images/default-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Prato delicioso do Eufrásio Gourmet",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eufrásio Gourmet",
    description: "Buffet variado com culinária japonesa, carnes grelhadas e muito mais.",
    images: [`${siteUrl}/images/default-og-image.jpg`],
  },
  icons: {
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
    // A CLASSE DAS FONTES VAI DIRETO NO BODY OU NO HTML, NÃO PRECISA DAS VARIÁVEIS NO className DO BODY SE USAR O MÉTODO DA DOC OFICIAL DO GEIST
    // O ERRO DE HIDRATAÇÃO ACONTECE SE HOUVER ESPAÇOS ENTRE <HTML> E <BODY> OU <HEAD>
    // VAMOS GARANTIR QUE NÃO HAJA NENHUM ESPAÇO INDESEJADO AQUI.
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      {/* 
        O <head> é gerenciado pelo Next.js através do metadata e do componente <Head> de next/head (para o Pages Router)
        ou automaticamente pelo Next.js no App Router. Não é necessário colocar <head></head> aqui manualmente.
      */}
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-grow pt-20"> {/* Ajustei o pt-16 para pt-20 para compensar altura do Navbar de h-20 */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}