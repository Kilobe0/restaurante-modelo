// src/components/layout/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; // Se tiver logo

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Exemplo de estilo Tailwind */}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          {/* <Image src="/logo.png" alt="Logo Restaurante" width={120} height={40} /> */}
          NomeRestaurante
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary-dark">Home</Link>
          <Link href="/cardapio" className="text-gray-600 hover:text-primary-dark">Cardápio</Link>
          <Link href="/sobre" className="text-gray-600 hover:text-primary-dark">Sobre</Link>
          <Link href="/galeria" className="text-gray-600 hover:text-primary-dark">Galeria</Link>
          <Link href="/contato" className="text-gray-600 hover:text-primary-dark">Contato</Link>
          <Link href="/reservas" className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded">
            Reservar
          </Link>
        </div>
      </div>
    </nav>
  );
}