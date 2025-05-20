// src/app/cardapio/page.tsx
import { menuItems, MenuItem as MenuItemType } from "@/app/data/menu";
// import MenuItemCard from "@/app/components/ui/MenuItemCard"; // Você precisará criar este componente

export default function CardapioPage() {
  const entradas = menuItems.filter(item => item.category === 'entrada');
  const principais = menuItems.filter(item => item.category === 'principal');
  // ... filtre outras categorias

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Nosso Cardápio</h1>

      {/* Seção de Entradas */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary-dark border-b-2 border-primary pb-2">Entradas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entradas.length > 0 ? entradas.map(item => (
            // <MenuItemCard key={item.id} item={item} />
            <div key={item.id} className="border p-4 rounded-lg shadow-lg bg-white">
                <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
                {item.image && <p className="text-sm text-gray-500 italic">(Imagem: {item.image})</p>}
                <p className="text-gray-600 my-2">{item.description}</p>
                <p className="text-lg font-bold text-primary">{item.price}</p>
            </div>
          )) : <p>Nenhuma entrada disponível no momento.</p>}
        </div>
      </section>

      {/* Seção de Pratos Principais (similar) */}
      {/* ... */}

      {/* Outras seções do cardápio ... */}
    </div>
  );
}