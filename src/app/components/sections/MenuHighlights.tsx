// src/app/components/sections/MenuHighlights.tsx
import Link from 'next/link';
import { menuItems } from '@/app/data/menu';
import MenuItemCard from '@/app/components/ui/MenuItemCard';
import SectionTitle from '@/app/components/ui/SectionTitle';

export default function MenuHighlights() {
  const highlightedItems = menuItems.filter(item => item.isFeatured).slice(0, 3);
  const finalItems = highlightedItems.length > 0 ? highlightedItems : menuItems.slice(0, 3);

  if (finalItems.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-pearl-800"> {/* Fundo da seção um pouco mais escuro que o body */}
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle className="text-eerie_black-600">Destaques do Nosso Cardápio</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {finalItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/cardapio"
            className="bg-primary hover:bg-primary-dark text-eerie_black-500 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Ver Cardápio Completo
          </Link>
        </div>
      </div>
    </section>
  );
}