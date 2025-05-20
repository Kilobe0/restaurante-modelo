// src/app/cardapio/page.tsx (ou o novo caminho src/app/cardapio/page.tsx)
import { menuItems } from "@/app/data/menu"; // Não precisa mais do MenuItemType aqui se MenuItemCard lida com isso
import MenuItemCard from "@/app/components/ui/MenuItemCard"; // Ajuste o caminho se necessário

export default function CardapioPage() {
  const entradas = menuItems.filter(item => item.category === 'entrada');
  const principais = menuItems.filter(item => item.category === 'principal');
  const sobremesas = menuItems.filter(item => item.category === 'sobremesa');
  const bebidas = menuItems.filter(item => item.category === 'bebida');

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Nosso Cardápio</h1>

      {/* Seção de Entradas */}
      {entradas.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark border-b-2 border-primary pb-2">Entradas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entradas.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Seção de Pratos Principais */}
      {principais.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark border-b-2 border-primary pb-2">Pratos Principais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principais.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Seção de Sobremesas */}
      {sobremesas.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark border-b-2 border-primary pb-2">Sobremesas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sobremesas.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* Seção de Bebidas */}
      {bebidas.length > 0 && (
        <section className=""> {/* Pode remover o mb-12 da última seção se preferir */}
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark border-b-2 border-primary pb-2">Bebidas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bebidas.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}