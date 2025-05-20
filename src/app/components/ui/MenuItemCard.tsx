// src/app/components/ui/MenuItemCard.tsx
import Image from 'next/image';
import type { MenuItem } from '@/app/data/menu';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-card-bg rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      {item.image && (
        <div className="relative w-full h-56 sm:h-60"> {/* Aumentei um pouco a altura da imagem */}
          <Image
            src={item.image}
            alt={item.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Otimização de imagem
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation=".5"></feGaussianBlur></filter><rect filter="url(#b)" width="100%" height="100%" fill="#777"></rect></svg>'
            ).toString("base64")}`}
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow"> {/* Ajustei padding */}
        <h3 className="text-xl font-semibold text-eerie_black-500 mb-2">{item.name}</h3>
        <p className="text-light-text text-sm mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-pearl-500"> {/* Linha separadora */}
          <p className="text-lg font-bold text-primary">{item.price}</p>
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-xs bg-secondary text-pearl-900 px-2 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}