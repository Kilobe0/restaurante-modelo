// src/app/components/sections/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center text-white">
      {/* Imagem de fundo */}
      <Image
        src="/images/hero-background.jpg" // Crie a pasta /public/images/ e adicione uma imagem
        alt="Ambiente acolhedor do restaurante"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="-z-10" // Para colocar a imagem atrás do conteúdo
        priority // Carregar a imagem principal com prioridade
      />
      {/* Overlay escuro para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Bem-vindo ao <span className="text-primary">NomeDoSeuRestaurante</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Experimente sabores autênticos e um ambiente inesquecível.
        </p>
        <div className="space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row justify-center items-center">
          <Link
            href="/cardapio"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            Ver Cardápio
          </Link>
          <Link
            href="/reservas"
            className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out w-full sm:w-auto"
          >
            Fazer Reserva
          </Link>
        </div>
      </div>
    </section>
  );
}