// src/data/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // ou number
  category: 'bebida' | 'temaki' | 'hot-roll' | 'combinado';
  image?: string; // caminho para a imagem em /public/images/menu/
  tags?: string[];
  isFeatured?: boolean; // Para destacar na homepage
  note?: string; // Para notas especiais como a observação sobre cerveja
}

export const menuItems: MenuItem[] = [
  // BEBIDAS
  {
    id: '1',
    name: 'Água Mineral Com Gás',
    description: 'Água mineral com gás gelada.',
    price: 'R$ 5,50',
    category: 'bebida',
    tags: ['Mineral', 'Com Gás'],
    isFeatured: false,
  },
  {
    id: '2',
    name: 'Água Mineral Comum',
    description: 'Água mineral natural gelada.',
    price: 'R$ 4,00',
    category: 'bebida',
    tags: ['Mineral', 'Natural'],
    isFeatured: false,
  },
  {
    id: '3',
    name: 'Cerveja 600 Ml',
    description: 'Cerveja gelada de 600ml.',
    price: 'R$ 17,90',
    category: 'bebida',
    tags: ['Cerveja', 'Gelada'],
    note: 'Na compra de qualquer cerveja precisamos da devolução dos cascos',
    isFeatured: false,
  },
  {
    id: '4',
    name: 'Cerveja Long Neck',
    description: 'Cerveja long neck gelada.',
    price: 'R$ 12,00',
    category: 'bebida',
    tags: ['Cerveja', 'Long Neck'],
    note: 'Na compra de qualquer cerveja precisamos da devolução dos cascos',
    isFeatured: false,
  },

  // TEMAKIS
  {
    id: '5',
    name: 'Temaki 1',
    description: 'Arroz, salmão e cebolinha.',
    price: 'R$ 28,90',
    category: 'temaki',
    tags: ['Salmão', 'Japonês'],
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Temaki 2',
    description: 'Arroz, salmão, cream cheese e cebolinha.',
    price: 'R$ 29,90',
    category: 'temaki',
    tags: ['Salmão', 'Cream Cheese', 'Japonês'],
    isFeatured: true,
  },

  // HOT ROLLS
  {
    id: '7',
    name: 'Hot Salmão',
    description: 'Salmão e cebolinha.',
    price: 'Consulte valores',
    category: 'hot-roll',
    tags: ['Salmão', 'Japonês'],
    isFeatured: false,
  },
  {
    id: '8',
    name: 'Hot Philadelphia',
    description: 'Salmão, cream cheese e cebolinha.',
    price: 'Consulte valores',
    category: 'hot-roll',
    tags: ['Salmão', 'Cream Cheese', 'Philadelphia'],
    isFeatured: false,
  },
  {
    id: '9',
    name: 'Hot Philadelphia Especial 1',
    description: 'Salmão, cream cheese e cebolinha finalizado com tartar de salmão e crips de couve.',
    price: 'Consulte valores',
    category: 'hot-roll',
    tags: ['Salmão', 'Especial', 'Tartar'],
    isFeatured: false,
  },
  {
    id: '10',
    name: 'Hot Philadelphia Especial 2',
    description: 'Salmão, cream cheese e cebolinha, finalizado com tartar de salmão e geléia de pimenta.',
    price: 'Consulte valores',
    category: 'hot-roll',
    tags: ['Salmão', 'Especial', 'Geléia de Pimenta'],
    isFeatured: false,
  },

  // COMBINADOS
  {
    id: '11',
    name: 'Combinado 12 Peças',
    description: '2 Niguiri de salmão, 4 Hossomaki Philadelphia, 3 Joy Tartar, 3 Sashimi.',
    price: 'R$ 39,90',
    category: 'combinado',
    tags: ['Combinado', 'Salmão', 'Variado'],
    isFeatured: true,
  },
  {
    id: '12',
    name: 'Combinado 16 Peças',
    description: '2 Niguiri de salmão, 4 Hossomaki Philadelphia, 4 Ura Ebi 2, 3 Joy Crisp, 3 Sashimi.',
    price: 'R$ 51,90',
    category: 'combinado',
    tags: ['Combinado', 'Salmão', 'Ebi'],
    isFeatured: true,
  },
  {
    id: '13',
    name: 'Combinado 20 Peças Especial',
    description: '4 Hots, 10 Joys máximo de cinco variedades, 3 Especias, 3 Sashimis.',
    price: 'R$ 81,90',
    category: 'combinado',
    tags: ['Combinado', 'Especial', 'Premium'],
    isFeatured: true,
  },
  {
    id: '14',
    name: 'Combinado 24 Peças',
    description: '2 Niguiri de salmão, 2 Niguiri Skin, 4 Hossomaki de salmão, 8 Uramaki Philadelphia, 2 Joy Tartar, 2 Joy Ebi Thai, 4 Sashimi.',
    price: 'R$ 79,90',
    category: 'combinado',
    tags: ['Combinado', 'Salmão', 'Variado'],
    isFeatured: false,
  },
  {
    id: '15',
    name: 'Combinado 32 Peças',
    description: '4 Niguiri de salmão, 8 Hossomaki Philadelphia, 4 Uramaki Philadelphia, 4 Ura Ebi 1, 4 Joy Tartar, 4 Joy Tilapia, 4 Sashimis de salmão.',
    price: 'R$ 99,90',
    category: 'combinado',
    tags: ['Combinado', 'Premium', 'Salmão'],
    isFeatured: false,
  },
];