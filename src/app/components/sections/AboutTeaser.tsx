// src/app/components/sections/AboutTeaser.tsx
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/app/components/ui/SectionTitle';

export default function AboutTeaser() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <SectionTitle>Conheça Nossa História</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            {/* Adicione uma imagem do ambiente ou do chef */}
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-teaser.jpg" // Crie /public/images/about-teaser.jpg
                alt="Ambiente do restaurante"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              No <span className="font-semibold text-primary-dark">NomeDoSeuRestaurante</span>, celebramos a culinária autêntica com ingredientes frescos e uma paixão por sabores que encantam. Nossa jornada começou com o sonho de criar um espaço acolhedor onde amigos e famílias pudessem compartilhar momentos especiais.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Descubra a essência da nossa cozinha e a dedicação em cada prato.
            </p>
            <Link
              href="/sobre" // Link para a futura página "Sobre Nós"
              className="inline-block bg-secondary hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}