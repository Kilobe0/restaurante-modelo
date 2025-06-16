// src/app/cardapio/page.tsx
import { menuItems } from "@/app/data/menu";
import MenuItemCard from "@/app/components/ui/MenuItemCard";
import SectionTitle from "@/app/components/ui/SectionTitle"; // Importar SectionTitle
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosso Cardápio", // O template no layout.tsx adicionará "| Eufrásio Gourmet"
  description: "Descubra nossa autêntica culinária japonesa no Eufrásio Gourmet: temakis frescos, hot rolls especiais, combinados variados e bebidas geladas. Sushi de qualidade em Sete Lagoas.",
};

export default function CardapioPage() {
  const bebidas = menuItems.filter(item => item.category === 'bebida');
  const temakis = menuItems.filter(item => item.category === 'temaki');
  const hotRolls = menuItems.filter(item => item.category === 'hot-roll');
  const combinados = menuItems.filter(item => item.category === 'combinado');

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

        <CategorySection title="Bebidas" items={bebidas} />
        <CategorySection title="Temakis" items={temakis} />
        <CategorySection title="Hot Rolls" items={hotRolls} />
        <CategorySection title="Combinados" items={combinados} />
      </div>
    </div>
  );
}