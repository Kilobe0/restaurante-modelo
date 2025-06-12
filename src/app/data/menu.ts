// src/data/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // ou number
  category: 'entrada' | 'principal' | 'sobremesa' | 'bebida';
  image?: string; // caminho para a imagem em /public/images/menu/
  tags?: string[];
  isFeatured?: boolean; // Para destacar na homepage
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Buffet Variado',
    description: 'Nosso famoso buffet com opções que vão da culinária japonesa às tradições brasileiras.',
    price: 'Consulte valores',
    category: 'principal',
    image: '/images/menu/buffet.jpg',
    tags: ['Buffet', 'Variado', 'Popular'],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Sushi Variado',
    description: 'Seleção de sushis frescos preparados com ingredientes de primeira qualidade.',
    price: 'A partir de R$ 35,00',
    category: 'entrada',
    image: '/images/menu/sushi.jpg',
    tags: ['Japonês', 'Fresco'],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Bife Grelhado',
    description: 'Suculento bife grelhado no ponto, acompanhado de guarnições tradicionais.',
    price: 'R$ 45,00',
    category: 'principal',
    image: '/images/menu/bife-grelhado.jpg',
    tags: ['Carne', 'Grelhado'],
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Frango Caipira',
    description: 'Frango caipira temperado com ervas e cozido lentamente para máximo sabor.',
    price: 'R$ 38,00',
    category: 'principal',
    image: '/images/menu/frango-caipira.jpg',
    tags: ['Frango', 'Tradicional'],
  },
  {
    id: '5',
    name: 'Feijão Tropeiro',
    description: 'Tradicional feijão tropeiro mineiro com linguiça, bacon, couve e farinha de mandioca.',
    price: 'R$ 32,00',
    category: 'principal',
    image: '/images/menu/feijao-tropeiro.jpg',
    tags: ['Tradicional', 'Mineiro'],
  },
  {
    id: '6',
    name: 'Frutos do Mar Grelhados',
    description: 'Seleção de frutos do mar frescos grelhados com temperos especiais e acompanhamentos.',
    price: 'R$ 65,00',
    category: 'principal',
    image: '/images/menu/frutos-do-mar.jpg',
    tags: ['Frutos do Mar', 'Grelhado'],
  },
  {
    id: '7',
    name: 'Sobremesa da Casa',
    description: 'Deliciosa sobremesa preparada diariamente com ingredientes selecionados.',
    price: 'R$ 18,00',
    category: 'sobremesa',
    image: '/images/menu/sobremesa-casa.jpg',
  },
  {
    id: '8',
    name: 'Suco Natural',
    description: 'Sucos naturais de frutas frescas espremidas na hora.',
    price: 'R$ 8,00',
    category: 'bebida',
    tags: ['Natural', 'Fresco'],
  },
  {
    id: '9',
    name: 'Refrigerante',
    description: 'Variedade de refrigerantes gelados.',
    price: 'R$ 6,00',
    category: 'bebida',
    tags: ['Gelado'],
  },
  {
    id: '10',
    name: 'Água Mineral',
    description: 'Água mineral natural gelada.',
    price: 'R$ 4,00',
    category: 'bebida',
    tags: ['Natural'],
  },
];