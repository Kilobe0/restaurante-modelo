// src/app/sobre/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
import Image from "next/image";
import { FaLeaf, FaUsers, FaUtensils } from "react-icons/fa";

export const metadata = {
  title: "Sobre Nós | Eufrásio Gourmet",
  description:
    "Conheça a história, a paixão pela culinária e os valores do Eufrásio Gourmet.",
};

export default function SobrePage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-foreground">Nossa Essência</SectionTitle>

        <div className="max-w-4xl mx-auto bg-card-bg p-8 md:p-12 rounded-xl shadow-xl">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 md:mb-12 shadow-md">
            <Image
              src="/images/about-banner.jpg" // VERIFIQUE SE ESTA IMAGEM EXISTE
              alt="Equipe do Eufrásio Gourmet em ação"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
             <div className="absolute inset-0 bg-overlay-gallery flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-pearl-default text-center px-4">Paixão em Cada Prato</h2>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-light-text leading-relaxed"> {/* prose-lg para estilização de texto */}
            <p className="mb-6">
              Bem-vindo ao <strong className="text-primary-dark">Eufrásio Gourmet</strong>! Nascemos do
              sonho de oferecer uma experiência gastronômica única e diversificada,
              com nosso buffet variado que vai da culinária japonesa às tradições brasileiras.
              Nossa jornada começou com a paixão por unir diferentes culturas culinárias
              em um só lugar, e hoje nos orgulhamos de ser um ponto de encontro para
              amantes da boa comida e de momentos memoráveis.
            </p>
            <p className="mb-6">
              Acreditamos que a diversidade culinária tem o poder de unir pessoas, contar
              histórias e criar laços. Por isso, cada prato que sai da nossa
              cozinha é uma celebração dos sabores do mundo, com um toque
              contemporâneo que surpreende e encanta.
            </p>

            <h3 className="text-2xl font-semibold text-secondary-dark mt-10 mb-6">
              Nossos Pilares
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-10 text-center not-prose"> {/* not-prose para resetar estilos do prose aqui */}
              <div className="flex flex-col items-center p-6 border border-pearl-500 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-pearl-900">
                <FaLeaf className="text-5xl text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Ingredientes Frescos
                </h4>
                <p className="text-sm text-light-text">
                  Selecionamos diariamente os melhores produtos locais para
                  garantir o máximo de sabor e qualidade.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 border border-pearl-500 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-pearl-900">
                <FaUtensils className="text-5xl text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Receitas com Alma
                </h4>
                <p className="text-sm text-light-text">
                  Nossas receitas combinam tradições culinárias diversas,
                  desde a culinária japonesa até os sabores brasileiros autênticos.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 border border-pearl-500 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-pearl-900">
                <FaUsers className="text-5xl text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  Ambiente Acolhedor
                </h4>
                <p className="text-sm text-light-text">
                  Criamos um espaço onde você se sente em casa, perfeito para
                  desfrutar de boa companhia e ótima comida.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-dark mt-10 mb-4">
              Nossa Equipe
            </h3>
            <p className="mb-6">
              Por trás de cada sorriso e cada prato delicioso, há uma equipe
              dedicada e apaixonada pelo que faz. Do nosso chef experiente aos
              atendentes que o recebem com carinho, todos trabalhamos juntos
              para tornar sua experiência no Eufrásio Gourmet
              inesquecível.
            </p>
            <p>
              Agradecemos por escolher o Eufrásio Gourmet. Esperamos
              servi-lo em breve e compartilhar consigo a nossa paixão pela
              culinária!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}