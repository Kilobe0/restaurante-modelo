// src/app/components/layout/Navbar.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cardapio', label: 'Cardápio' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="bg-card-bg shadow-md sticky top-0 z-50"> {/* Fundo branco/claro */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logoipsum.svg" alt="Logo Restaurante Sabor Caseiro" width={130} height={50} priority />
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/reservas" className="ml-3 bg-primary hover:bg-primary-dark text-eerie_black-500 font-semibold py-2.5 px-5 rounded-md text-sm transition-colors shadow hover:shadow-md">
              Reservar Agora
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-pearl-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-pearl-500" id="mobile-menu"> {/* Borda sutil */}
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-foreground hover:bg-pearl-800 hover:text-primary block px-3 py-2.5 rounded-md text-base font-medium transition-colors"> {/* Fundo de hover mais sutil */}
                {link.label}
              </Link>
            ))}
            <Link href="/reservas" onClick={() => setIsOpen(false)} className="bg-primary hover:bg-primary-dark text-eerie_black-500 block w-full text-center mt-2 px-3 py-3 rounded-md text-base font-medium transition-colors shadow hover:shadow-md">
              Reservar Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}