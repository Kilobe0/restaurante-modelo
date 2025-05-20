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
    default: "Restaurante Sabor Caseiro | Tradição e Sabor em Cada Prato",
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
        url: `${siteUrl}/images/default-og-image.jpg`,
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