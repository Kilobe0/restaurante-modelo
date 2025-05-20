// src/app/contato/page.tsx

import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";

// ... imports ...
export default function ContatoPage() {
  // ... mapEmbedUrl ...
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-foreground">Fale Conosco</SectionTitle>
        <div className="bg-card-bg p-6 sm:p-8 md:p-12 rounded-xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Nossas Informações
                </h3>
                <div className="space-y-4 text-light-text"> {/* text-light-text para conteúdo */}
                  <p className="flex items-start">
                    <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>
                      Rua das Delícias, 123, Bairro Saboroso <br />
                      Cidade Gastronômica, ES - CEP 12345-678
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FaPhoneAlt className="text-primary mr-3 flex-shrink-0" size={18} />
                    <a href="tel:+5527999998888" className="hover:text-primary-dark">(27) 99999-8888</a>
                  </p>
                  {/* ... etc ... */}
                </div>
              </div>
              {/* ... (Horário, Redes Sociais com cores da paleta) ... */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Siga-nos
                </h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-light-text hover:text-primary transition-colors">
                    <FaInstagram size={28} />
                  </a>
                  {/* ... outros ícones ... */}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {/* ... Localização ... */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Envie uma Mensagem
                </h3>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-text mb-1">Nome Completo</label>
                    <input type="text" name="name" id="name" autoComplete="name" required className="mt-1 block w-full px-4 py-2.5 border-ebony-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm bg-pearl-900 text-foreground placeholder-ebony-600" placeholder="Seu nome"/>
                  </div>
                  {/* ... outros inputs com cores da paleta ... */}
                  <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-eerie_black-500 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors duration-150 ease-in-out">
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}