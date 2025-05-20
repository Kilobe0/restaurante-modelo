// src/app/components/sections/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[450px] sm:h-[80vh] md:min-h-[500px] flex items-center justify-center text-pearl-900"> {/* Texto claro da paleta pearl */}
      <Image
        src="/images/hero-background.jpg" // VERIFIQUE SE ESTA IMAGEM EXISTE EM public/images/hero-background.jpg
        alt="Ambiente acolhedor e pratos deliciosos do restaurante"
        fill // Nova propriedade para preencher o container pai
        style={{ objectFit: 'cover' }} // Equivalente a objectFit="cover" com fill
        quality={85}
        className="-z-10"
        priority
      />
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-eerie_black-500 opacity-60 -z-10"></div> {/* Usando cor da paleta para overlay */}

      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Bem-vindo ao <span className="text-vanilla">Restaurante Sabor Caseiro</span> {/* Cor de destaque da paleta */}
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-pearl-800"> {/* Tom mais claro para subtítulo */}
          Experimente sabores autênticos e um ambiente inesquecível, onde cada prato é feito com amor.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <Link
            href="/cardapio"
            className="bg-primary hover:bg-primary-dark text-eerie_black-500 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto shadow-md hover:shadow-lg"
          >
            Ver Cardápio
          </Link>
          <Link
            href="/reservas"
            className="border-2 border-vanilla hover:bg-vanilla hover:text-eerie_black-500 text-vanilla font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out w-full sm:w-auto shadow-md hover:shadow-lg"
          >
            Fazer Reserva
          </Link>
        </div>
      </div>
    </section>
  );
}