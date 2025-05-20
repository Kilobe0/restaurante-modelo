// src/app/contato/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata = {
  title: "Contato | Restaurante Saboroso",
  description:
    "Entre em contato conosco, veja nossa localização, horário de funcionamento e siga-nos nas redes sociais.",
};

export default function ContatoPage() {
  // Substitua pelo link real do Google Maps Embed
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.094892322829!2d-46.656827284476!3d-23.56409196759958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886543210"; // Exemplo: Av. Paulista

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle>Fale Conosco</SectionTitle>
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Coluna da Esquerda: Informações e Mapa */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Nossas Informações
                </h3>
                <div className="space-y-4 text-gray-700">
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
                  <p className="flex items-center">
                    <FaEnvelope className="text-primary mr-3 flex-shrink-0" size={18} />
                    <a href="mailto:contato@restaurantesaboroso.com.br" className="hover:text-primary-dark">
                      contato@restaurantesaboroso.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Horário de Funcionamento
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center">
                    <FaClock className="text-primary mr-3" size={18} />
                    Segunda a Sexta: 11:30 - 15:00 | 18:30 - 23:00
                  </p>
                  <p className="flex items-center">
                    <FaClock className="text-primary mr-3" size={18} />
                    Sábado: 11:30 - 23:30
                  </p>
                  <p className="flex items-center">
                    <FaClock className="text-primary mr-3" size={18} />
                    Domingo e Feriados: 11:30 - 17:00
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Siga-nos
                </h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-dark transition-colors">
                    <FaInstagram size={28} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-dark transition-colors">
                    <FaFacebookF size={28} />
                  </a>
                  <a href="https://wa.me/5527999998888" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-dark transition-colors">
                    <FaWhatsapp size={28} />
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Formulário de Contato */}
            <div className="space-y-8">
               <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Localização
                </h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-md overflow-hidden">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Envie uma Mensagem
                </h3>
                <form action="#" method="POST" className="space-y-6"> {/* Lembre-se que o envio não está implementado */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input type="text" name="name" id="name" autoComplete="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Seu nome"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" id="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="seu@email.com"/>
                  </div>
                   <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (Opcional)</label>
                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="(XX) XXXXX-XXXX"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
                    <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Escreva sua dúvida ou sugestão..."></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors">
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