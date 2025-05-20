// src/app/contato/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'; // Opcional: para ícones

export const metadata = {
    title: "Contato | NomeDoSeuRestaurante",
    description: "Entre em contato conosco, veja nossa localização e horário de funcionamento.",
};

export default function ContatoPage() {
  return (
    <div className="container mx-auto py-12 px-6">
      <SectionTitle>Entre em Contato</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Coluna da Esquerda: Informações e Mapa */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossas Informações</h3>
          <div className="space-y-3 text-lg text-gray-700 mb-8">
            <p>
              {/* <FaMapMarkerAlt className="inline mr-2 text-primary" /> */}
              Endereço: Rua Fictícia, 123 - Bairro Imaginário, Cidade Exemplo - UF
            </p>
            <p>
              {/* <FaPhone className="inline mr-2 text-primary" /> */}
              Telefone: (XX) 9XXXX-XXXX
            </p>
            <p>
              {/* <FaEnvelope className="inline mr-2 text-primary" /> */}
              Email: contato@nomedoseurestaurante.com.br
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Horário de Funcionamento</h3>
          <div className="space-y-2 text-lg text-gray-700 mb-8">
            <p>Segunda a Sexta: 11:00 - 23:00</p>
            <p>Sábado: 12:00 - 00:00</p>
            <p>Domingo: 12:00 - 22:00</p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Localização</h3>
          <div className="aspect-video bg-gray-200 rounded-lg shadow-md">
            {/* Google Maps Embed Iframe aqui */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.0!2d0.0!3d0.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_LATITUDE_LONGITUDE_HERE!5e0!3m2!1spt-BR!2sbr!4vTIMESTAMP" // Substitua pelo embed do seu mapa
              width="100%"
              height="100%"
              style={{ border:0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
            {/* Para obter o src do iframe:
                1. Vá ao Google Maps.
                2. Pesquise o endereço do restaurante.
                3. Clique em "Compartilhar".
                4. Selecione "Incorporar um mapa".
                5. Copie o código HTML e pegue apenas o valor do atributo `src` do iframe.
            */}
          </div>
        </div>

        {/* Coluna da Direita: Formulário de Contato */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}