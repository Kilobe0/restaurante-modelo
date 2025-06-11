// src/app/galeria/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
import Image from "next/image";

export const metadata = {
  title: "Galeria | Restaurante Sabor Caseiro",
  description:
    "Veja fotos dos nossos pratos deliciosos, do ambiente acolhedor e de momentos especiais no Restaurante Sabor Caseiro.",
};

// Certifique-se que estas imagens existem em public/images/gallery/
const galleryImages = [
  { id: 1, src: "/images/gallery/galeria1.jpg", alt: "Prato principal apetitoso" },
  { id: 2, src: "/images/gallery/galeria2.jpg", alt: "Salão interno do restaurante" },
  { id: 3, src: "/images/gallery/galeria3.jpg", alt: "Sobremesa colorida e deliciosa" },
  { id: 4, src: "/images/gallery/galeria4.jpg", alt: "Detalhe da decoração do bar" },
  { id: 5, src: "/images/gallery/galeria5.jpg", alt: "Entrada saborosa para começar" }, // Adicionei mais, se tiver
  { id: 6, src: "/images/gallery/galeria6.jpg", alt: "Área externa charmosa para refeições" },
  { id: 7, src: "/images/gallery/galeria7.jpg", alt: "Drink refrescante e bem apresentado" },
  { id: 8, src: "/images/gallery/galeria8.jpg", alt: "Chef preparando prato na cozinha" },
];

export default function GaleriaPage() {
  return (
    <div className="bg-background min-h-screen"> {/* Usando cor de fundo da paleta */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-foreground">Momentos e Sabores</SectionTitle>
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg group cursor-pointer" // Ajustado aspect ratio
              >
                <Image
                  src={image.src} // VERIFIQUE SE ESTE CAMINHO ESTÁ CORRETO
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 6"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation=".5"></feGaussianBlur></filter><rect filter="url(#b)" width="100%" height="100%" fill="#bbb"></rect></svg>'
                  ).toString("base64")}`}
                />
                <div className="absolute inset-0 bg-overlay-gallery group-hover:bg-opacity-10 transition-all duration-300 flex items-end p-3">
                  <p className="text-pearl-900 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-light-text">
            Nossas fotos estarão disponíveis em breve!
          </p>
        )}
      </div>
    </div>
  );
}