// src/app/sobre/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
import Image from "next/image";
import { FaLeaf, FaUsers, FaUtensils } from "react-icons/fa";

export const metadata = {
  title: "Sobre Nós | Restaurante Saboroso",
  description:
    "Conheça a história, a paixão pela culinária e os valores do Restaurante Saboroso.",
};

export default function SobrePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle>Nossa Essência</SectionTitle>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 md:mb-12 shadow-md">
            <Image
              src="/images/about-banner.jpg" // Crie esta imagem em public/images/
              alt="Equipe do Restaurante Saboroso em ação"
              layout="fill"
              objectFit="cover"
            />
             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Paixão em Cada Prato</h2>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Bem-vindo ao <strong>Restaurante Saboroso</strong>! Nascemos do
              sonho de compartilhar a autêntica culinária caseira, preparada com
              ingredientes frescos e uma generosa porção de amor. Nossa jornada
              começou há mais de uma década, em uma pequena cozinha familiar, e
              hoje nos orgulhamos de ser um ponto de encontro para amantes da
              boa comida e de momentos memoráveis.
            </p>
            <p className="mb-6">
              Acreditamos que a comida tem o poder de unir pessoas, contar
              histórias e criar laços. Por isso, cada prato que sai da nossa
              cozinha é uma celebração dos sabores tradicionais, com um toque
              contemporâneo que surpreende e encanta.
            </p>

            <h3 className="text-2xl font-semibold text-primary-dark mt-10 mb-4">
              Nossos Pilares
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-10 text-center">
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaLeaf className="text-4xl text-primary mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  Ingredientes Frescos
                </h4>
                <p className="text-sm text-gray-600">
                  Selecionamos diariamente os melhores produtos locais para
                  garantir o máximo de sabor e qualidade.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaUtensils className="text-4xl text-primary mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  Receitas com Alma
                </h4>
                <p className="text-sm text-gray-600">
                  Nossas receitas são passadas de geração em geração,
                  preservando a tradição e o carinho da cozinha caseira.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FaUsers className="text-4xl text-primary mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  Ambiente Acolhedor
                </h4>
                <p className="text-sm text-gray-600">
                  Criamos um espaço onde você se sente em casa, perfeito para
                  desfrutar de boa companhia e ótima comida.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-primary-dark mt-10 mb-4">
              Nossa Equipe
            </h3>
            <p className="mb-6">
              Por trás de cada sorriso e cada prato delicioso, há uma equipe
              dedicada e apaixonada pelo que faz. Do nosso chef experiente aos
              atendentes que o recebem com carinho, todos trabalhamos juntos
              para tornar sua experiência no Restaurante Saboroso
              inesquecível.
            </p>
            <p>
              Agradecemos por escolher o Restaurante Saboroso. Esperamos
              servi-lo em breve e compartilhar consigo a nossa paixão pela
              culinária!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}