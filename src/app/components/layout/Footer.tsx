// src/app/components/layout/Footer.tsx
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Coluna 1: Sobre e Logo */}
          <div>
            <h5 className="text-xl font-semibold mb-3 text-primary">Restaurante Saboroso</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              Onde cada prato conta uma história de sabor e tradição. Venha nos visitar e desfrute de uma experiência gastronômica única.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Navegue</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/cardapio" className="text-gray-300 hover:text-primary transition-colors text-sm">Cardápio</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-primary transition-colors text-sm">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-primary transition-colors text-sm">Contato</Link></li>
              <li><Link href="/reservas" className="text-gray-300 hover:text-primary transition-colors text-sm">Reservas</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato e Redes Sociais */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Contato</h5>
            <address className="not-italic text-sm space-y-1 text-gray-300">
              <p>Rua das Delícias, 123</p>
              <p>Cidade Gastronômica, ES</p>
              <p>
                <a href="tel:+5527999998888" className="hover:text-primary">(27) 99999-8888</a>
              </p>
              <p>
                <a href="mailto:contato@restaurantesaboroso.com.br" className="hover:text-primary">contato@restaurantesaboroso.com.br</a>
              </p>
            </address>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-primary transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-primary transition-colors">
                <FaFacebookF size={22} />
              </a>
              <a href="https://wa.me/5527999998888" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-300 hover:text-primary transition-colors">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Restaurante Saboroso. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido com <span className="text-red-500">❤</span> por Seu Nome/Sua Agência</p>
        </div>
      </div>
    </footer>
  );
}