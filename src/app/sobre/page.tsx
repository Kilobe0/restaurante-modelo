// src/app/sobre/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";

export const metadata = {
    title: "Sobre Nós | NomeDoSeuRestaurante",
    description: "Conheça a história e a paixão por trás do NomeDoSeuRestaurante.",
};

export default function SobrePage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <SectionTitle>Sobre Nós</SectionTitle>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          Bem-vindo à página Sobre Nós! Aqui você encontrará mais detalhes sobre nossa história,
          nossa equipe e a filosofia que guia nossa cozinha.
        </p>
        <p className="mb-6">
          [Conteúdo detalhado sobre o restaurante virá aqui...]
        </p>
        <p>
          Agradecemos sua visita e esperamos vê-lo em breve!
        </p>
      </div>
    </div>
  );
}