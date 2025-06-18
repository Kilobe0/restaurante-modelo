// src/app/components/layout/Footer.tsx
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-footer-bg text-light-text pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 text-center">
          <div className="lg:col-span-1 flex flex-col items-center">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logoipsum.svg"
                alt="Logo Eufrásio Gourmet"
                width={150}
                height={58}
              />
            </Link>
            <p className="text-sm leading-relaxed text-text-muted-on-dark">
              Onde cada prato conta uma história de sabor e tradição.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4 text-light">Navegue</h5>
            <ul className="space-y-2">
              <li><Link href="/" className="text-light hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/cardapio" className="text-light hover:text-primary transition-colors text-sm">Cardápio</Link></li>
              <li><Link href="/sobre" className="text-light hover:text-primary transition-colors text-sm">Sobre Nós</Link></li>
              <li><Link href="/galeria" className="text-light hover:text-primary transition-colors text-sm">Galeria</Link></li>
              <li><Link href="/contato" className="text-light hover:text-primary transition-colors text-sm">Contato</Link></li>
              <li><Link href="/reservas" className="text-light hover:text-primary transition-colors text-sm">Reservas</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4 text-light">Contato</h5>
            <address className="not-italic text-sm space-y-2 text-light">
              <p>Rua Governador Milton Campos, 145</p>
              <p>Centro, Sete Lagoas (MG)</p>
              <p>
                <a href="tel:+5531999122915" className="text-light hover:text-primary transition-colors">(31) 99912-2915</a>
              </p>
              <p>
                <a href="mailto:contato@eufrasiogourmet.com.br" className="text-light hover:text-primary transition-colors">
                  contato@eufrasiogourmet.com.br
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4 text-light">Siga-nos</h5>
            <div className="flex justify-center space-x-5">
              <a href="https://instagram.com/eufrasiogourmet" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/5531999122915" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-light hover:text-primary transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-600 pt-8 text-center text-xs text-text-muted-on-dark">
          <p>© {currentYear} Eufrásio Gourmet. Todos os direitos reservados.</p>
          <p className="mt-1">
            Design por <a href="https://github.com/Kilobe0" target="_blank" rel="noopener noreferrer" className="text-text-muted-on-dark hover:text-primary underline transition-colors">Matheus Achim</a>
          </p>
        </div>
      </div>
    </footer>
  );
}