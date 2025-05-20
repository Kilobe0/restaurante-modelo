// src/app/components/sections/MenuHighlights.tsx
import Link from 'next/link';
import { menuItems } from '@/app/data/menu';
import MenuItemCard from '@/app/components/ui/MenuItemCard';
import SectionTitle from '@/app/components/ui/SectionTitle';

export default function MenuHighlights() {
  // Exemplo: pegar os 3 primeiros itens ou itens marcados como destaque
  const highlightedItems = menuItems.slice(0, 3); // Ou use .filter() para uma lógica mais específica

  if (highlightedItems.length === 0) {
    return null; // Não renderizar a seção se não houver itens
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50"> {/* Fundo sutil para diferenciar */}
      <div className="container mx-auto px-6">
        <SectionTitle>Destaques do Nosso Cardápio</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {highlightedItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/cardapio"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Ver Cardápio Completo
          </Link>
        </div>
      </div>
    </section>
  );
}