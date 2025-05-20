// src/app/reservas/page.tsx
import SectionTitle from "@/app/components/ui/SectionTitle";
import { FaCalendarAlt, FaClock, FaUsers, FaEdit } from "react-icons/fa";

export const metadata = {
  title: "Reservas | Restaurante Saboroso",
  description: "Faça sua reserva no Restaurante Saboroso e garanta sua mesa para uma experiência inesquecível.",
};

export default function ReservasPage() {
  const today = new Date().toISOString().split("T")[0]; // Data de hoje no formato YYYY-MM-DD

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle>Faça Sua Reserva</SectionTitle>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl">
          <p className="text-center text-gray-600 mb-8">
            Garanta sua mesa e desfrute de momentos deliciosos conosco.
            Para grupos maiores de 8 pessoas ou eventos especiais, por favor,
            entre em contato diretamente pelo telefone{" "}
            <a href="tel:+5527999998888" className="text-primary hover:underline">(27) 99999-8888</a>.
          </p>

          <form action="#" method="POST" className="space-y-6"> {/* Lembre-se que o envio não está implementado */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo para a Reserva</label>
              <input type="text" name="name" id="name" autoComplete="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Seu nome"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email de Contato</label>
                <input type="email" name="email" id="email" autoComplete="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="seu@email.com"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone de Contato</label>
                <input type="tel" name="phone" id="phone" autoComplete="tel" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="(XX) XXXXX-XXXX"/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaCalendarAlt className="mr-2 text-gray-500" /> Data
                </label>
                <input type="date" name="date" id="date" required min={today} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"/>
              </div>
              <div>
                <label htmlFor="time" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaClock className="mr-2 text-gray-500" /> Hora
                </label>
                <select id="time" name="time" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm">
                  <option value="">Selecione</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="18:30">18:30 (Jantar)</option>
                  <option value="19:00">19:00 (Jantar)</option>
                  <option value="19:30">19:30 (Jantar)</option>
                  <option value="20:00">20:00 (Jantar)</option>
                  <option value="20:30">20:30 (Jantar)</option>
                  <option value="21:00">21:00 (Jantar)</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaUsers className="mr-2 text-gray-500" /> Pessoas
                </label>
                <input type="number" name="guests" id="guests" required min="1" max="8" defaultValue="2" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"/>
              </div>
            </div>

            <div>
              <label htmlFor="observations" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <FaEdit className="mr-2 text-gray-500" /> Observações (Opcional)
              </label>
              <textarea id="observations" name="observations" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Alguma preferência de mesa, alergia ou comemoração especial?"></textarea>
            </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors">
                Confirmar Reserva
              </button>
            </div>
             <p className="text-xs text-gray-500 text-center mt-4">
                Sua reserva estará sujeita à confirmação. Entraremos em contato caso haja algum imprevisto.
              </p>
          </form>
        </div>
      </div>
    </div>
  );
}