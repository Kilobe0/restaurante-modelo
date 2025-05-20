// src/app/galeria/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
import Image from "next/image";
// Para um lightbox mais avançado, você consideraria bibliotecas como 'yet-another-react-lightbox'
// Por agora, faremos um efeito de hover simples e link para a imagem (se aplicável)

export const metadata = {
  title: "Galeria | Restaurante Saboroso",
  description:
    "Veja fotos dos nossos pratos deliciosos, do ambiente acolhedor e de momentos especiais no Restaurante Saboroso.",
};

// Mock data para a galeria (adicione suas imagens reais aqui)
const galleryImages = [
  { id: 1, src: "/images/gallery/galeria1.jpg", alt: "Filé Mignon ao Molho Madeira" },
  { id: 2, src: "/images/gallery/galeria2.jpg", alt: "Ambiente interno aconchegante" },
  { id: 3, src: "/images/gallery/galeria3.jpg", alt: "Cheesecake de Frutas Vermelhas" },
  { id: 4, src: "/images/gallery/galeria4.jpg", alt: "Detalhe do nosso bar" },
  { id: 5, src: "/images/gallery/prato-entrada-1.jpg", alt: "Bruschettas Italianas" },
  { id: 6, src: "/images/gallery/ambiente-externo-1.jpg", alt: "Nossa área externa charmosa" },
  { id: 7, src: "/images/gallery/bebida-1.jpg", alt: "Drink refrescante especial da casa" },
  { id: 8, src: "/images/gallery/chef-cozinha.jpg", alt: "Nosso chef preparando uma delícia" },
];

export default function GaleriaPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle>Momentos e Sabores</SectionTitle>
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-w-1 aspect-h-1 relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                // onClick={() => alert(`Abrir lightbox para: ${image.alt}`)} // Lógica para Lightbox
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  placeholder="blur" // Efeito de blur enquanto carrega
                  blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation=".5"></feGaussianBlur></filter><rect filter="url(#b)" width="100%" height="100%" fill="#ccc"></rect></svg>'
                  ).toString("base64")}`} // Placeholder SVG simples
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                    {image.alt}
                  </p>
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
    </div>
  );
}