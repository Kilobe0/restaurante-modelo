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
    name: 'Bruschetta Clássica',
    description: 'Pão italiano tostado com tomates frescos, alho, manjericão e azeite extra virgem.',
    price: 'R$ 28,00',
    category: 'entrada',
    image: '/images/menu/bruschetta.jpg', // Crie esta imagem
    tags: ['Vegetariano', 'Popular'],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Salada Caprese Fresca',
    description: 'Tomates maduros, mussarela de búfala fresca, manjericão e um fio de azeite balsâmico.',
    price: 'R$ 32,00',
    category: 'entrada',
    image: '/images/menu/salada.jpg', // Crie esta imagem
    tags: ['Leve', 'Sem Glúten'],
  },
  {
    id: '3',
    name: 'Filé Mignon ao Molho Madeira',
    description: 'Medalhões de filé mignon grelhados, cobertos com molho madeira e acompanhados de risoto de parmesão.',
    price: 'R$ 75,00',
    category: 'principal',
    image: '/images/menu/file-mignon.jpg', // Crie esta imagem
    tags: ['Carne', 'Sofisticado'],
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Salmão Grelhado com Ervas',
    description: 'Posta de salmão fresco grelhado com crosta de ervas finas, acompanhado de legumes na manteiga.',
    price: 'R$ 68,00',
    category: 'principal',
    image: '/images/menu/salmao-grelhado.jpg', // Crie esta imagem
    tags: ['Peixe', 'Saudável'],
  },
  {
    id: '5',
    name: 'Risoto de Camarão Cremoso',
    description: 'Arroz arbóreo cozido lentamente em caldo de legumes com camarões frescos, finalizado com parmesão e um toque de limão siciliano.',
    price: 'R$ 72,00',
    category: 'principal',
    image: '/images/menu/risoto-de-camarao.jpg', // Crie esta imagem
  },
  {
    id: '6',
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Clássico cheesecake americano com base crocante de biscoito e uma generosa calda de frutas vermelhas.',
    price: 'R$ 25,00',
    category: 'sobremesa',
    image: '/images/menu/cheesecake.jpg', // Crie esta imagem
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Petit Gateau com Sorvete',
    description: 'Bolo de chocolate com interior cremoso e quente, servido com uma bola de sorvete de creme.',
    price: 'R$ 27,00',
    category: 'sobremesa',
    image: '/images/menu/petit-gateau.jpg', // Crie esta imagem
  },
  {
    id: '8',
    name: 'Suco Natural de Laranja',
    description: 'Laranjas frescas espremidas na hora.',
    price: 'R$ 12,00',
    category: 'bebida',
    tags: ['Natural'],
  },
  {
    id: '9',
    name: 'Caipirinha Tradicional',
    description: 'Cachaça, limão, açúcar e gelo. O clássico brasileiro.',
    price: 'R$ 18,00',
    category: 'bebida',
    tags: ['Alcoólico'],
  },
  // Adicione mais itens conforme necessário
];