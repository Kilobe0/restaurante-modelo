// src/app/page.tsx
import HeroSection from "@/app/components/sections/HeroSection";
import MenuHighlights from "@/app/components/sections/MenuHighlights";
import AboutTeaser from "@/app/components/sections/AboutTeaser";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuHighlights />
      <AboutTeaser />
      {/* <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Mais Seções em Breve</h2>
        <p className="text-center text-gray-600">
          Estamos trabalhando para trazer mais conteúdo para você!
        </p>
      </div> */}
    </>
  );
}