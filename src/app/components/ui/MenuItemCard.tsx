// src/app/components/ui/MenuItemCard.tsx
import Image from 'next/image';
import type { MenuItem } from '@/app/data/menu'; // Importe o tipo

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-xl hover:scale-105">
      {item.image && (
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            // onError={(e) => e.currentTarget.style.display = 'none'} // Opcional: esconder se imagem falhar
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-lg font-bold text-primary">{item.price}</p>
          {item.tags && item.tags.length > 0 && (
            <div className="space-x-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
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