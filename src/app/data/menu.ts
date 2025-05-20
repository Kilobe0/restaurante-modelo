// src/data/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // ou number
  category: 'entrada' | 'principal' | 'sobremesa' | 'bebida';
  image?: string; // caminho para a imagem em /public/images/
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Bruschetta Clássica',
    description: 'Pão italiano tostado com tomates frescos, alho, manjericão e azeite.',
    price: 'R$ 25,00',
    category: 'entrada',
    image: '/images/menu/pexe.jpg'
  },
  // ... mais itens
];