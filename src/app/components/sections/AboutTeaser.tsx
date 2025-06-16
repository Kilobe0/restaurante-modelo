// src/app/components/sections/AboutTeaser.tsx
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/app/components/ui/SectionTitle';

export default function AboutTeaser() {
  return (
    <section className="py-16 md:py-20 bg-background"> {/* Fundo da paleta */}
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle className="text-foreground">Conheça Nossa Essência</SectionTitle>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-xl"> {/* Ajustado aspect ratio */}
              <Image
                src="/images/about-teaser.jpg" // VERIFIQUE SE ESTA IMAGEM EXISTE
                alt="Ambiente interno charmoso do Eufrásio Gourmet"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary-dark mb-4">
              Paixão que se Saboreia
            </h3>
            <p className="text-lg text-light-text mb-6 leading-relaxed">
              No <span className="font-semibold text-primary-dark">Eufrásio Gourmet</span>,
              celebramos a autêntica culinária japonesa com nossos temakis frescos, hot rolls especiais
              e combinados únicos. Nossa paixão é oferecer uma experiência gastronômica
              única onde amigos e famílias podem compartilhar momentos especiais.
            </p>
            <p className="text-light-text mb-8 leading-relaxed">
              Descubra a essência da nossa cozinha japonesa e a dedicação que colocamos em cada prato.
            </p>
            <Link
              href="/sobre"
              className="inline-block bg-primary hover:bg-primary-dark text-on-primary font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Saiba Mais Sobre Nós
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}