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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center h-16"> {/* Altura fixa para consistência */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logoipsum.svg" // Você já tem este!
              alt="Logo Restaurante Saboroso" // Nome mais específico
              width={130}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1"> {/* Reduzir um pouco o space-x */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservas"
              className="ml-2 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors" // Adicionado ml-2 para separar
            >
              Reservar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:bg-primary-light hover:text-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservas"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white block w-full text-center mt-2 px-3 py-3 rounded-md text-base font-medium transition-colors" // Aumentado o py
            >
              Reservar Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}