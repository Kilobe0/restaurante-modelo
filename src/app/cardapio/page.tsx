// src/app/cardapio/page.tsx
import { menuItems } from "@/app/data/menu";
import MenuItemCard from "@/app/components/ui/MenuItemCard";
import SectionTitle from "@/app/components/ui/SectionTitle"; // Importar SectionTitle
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Cardápio", // O template no layout.tsx adicionará "| Eufrásio Gourmet"
  description: "Explore a variedade de pratos deliciosos do Eufrásio Gourmet, desde nosso buffet variado com culinária japonesa até pratos tradicionais brasileiros.",
};

export default function CardapioPage() {
  const entradas = menuItems.filter(item => item.category === 'entrada');
  const principais = menuItems.filter(item => item.category === 'principal');
  const sobremesas = menuItems.filter(item => item.category === 'sobremesa');
  const bebidas = menuItems.filter(item => item.category === 'bebida');

  const CategorySection = ({ title, items }: { title: string, items: typeof menuItems }) => {
    if (items.length === 0) return null;
    return (
      <section className="mb-16"> {/* Aumentado margin-bottom */}
        <h2 className="text-3xl font-semibold mb-8 text-secondary-dark border-b-2 border-primary pb-3"> {/* Usando cores da paleta */}
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"> {/* Ajustado gap */}
          {items.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-foreground mb-16">Nosso Cardápio Delicioso</SectionTitle> {/* OK */}

        <CategorySection title="Entradas Frescas" items={entradas} />
        <CategorySection title="Pratos Principais Saborosos" items={principais} />
        <CategorySection title="Sobremesas Irresistíveis" items={sobremesas} />
        <CategorySection title="Bebidas Refrescantes" items={bebidas} />
      </div>
    </div>
  );
}