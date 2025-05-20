// src/app/galeria/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
// import Image from "next/image"; // Você usará isso quando adicionar imagens

export const metadata = {
    title: "Galeria | NomeDoSeuRestaurante",
    description: "Veja fotos dos nossos pratos deliciosos e do ambiente acolhedor.",
};

// Mock data para a galeria (substitua por dados reais ou de um CMS depois)
const galleryImages = [
  { id: 1, src: "/images/gallery/prato1.jpg", alt: "Prato delicioso 1" },
  { id: 2, src: "/images/gallery/ambiente1.jpg", alt: "Ambiente do restaurante 1" },
  { id: 3, src: "/images/gallery/prato2.jpg", alt: "Prato delicioso 2" },
  { id: 4, src: "/images/gallery/detalhe-cozinha.jpg", alt: "Detalhe da cozinha" },
  // Adicione mais imagens aqui
];

export default function GaleriaPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <SectionTitle>Nossa Galeria</SectionTitle>
      {galleryImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square relative rounded-lg overflow-hidden shadow-lg group">
              {/* 
              // Descomente quando tiver as imagens:
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
              */}
              {/* Placeholder enquanto não tem imagens */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">{image.alt} (imagem)</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700">
          Nossas fotos estarão disponíveis em breve!
        </p>
      )}
    </div>
  );
}