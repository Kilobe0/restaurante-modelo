// src/app/reservas/page.tsx

import SectionTitle from "../components/ui/SectionTitle";

// ... imports ...
export default function ReservasPage() {
  // ... today ...
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-foreground">Faça Sua Reserva</SectionTitle>
        <div className="max-w-2xl mx-auto bg-card-bg p-6 sm:p-8 md:p-12 rounded-xl shadow-xl">
          <p className="text-center text-light-text mb-8">
            Garanta sua mesa e desfrute de momentos deliciosos conosco.
            Para grupos maiores de 8 pessoas ou eventos especiais, por favor,
            entre em contato diretamente pelo telefone{" "}
            <a href="tel:+5527999998888" className="text-primary hover:text-primary-dark font-medium">(27) 99999-8888</a>.
          </p>

          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-text mb-1">Nome Completo para a Reserva</label>
              <input type="text" name="name" id="name" autoComplete="name" required className="mt-1 block w-full px-4 py-2.5 border-ebony-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm bg-pearl-900 text-foreground placeholder-ebony-600" placeholder="Seu nome"/>
            </div>
            {/* ... outros inputs e selects com cores da paleta ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-text mb-1">Email de Contato</label>
                <input type="email" name="email" id="email" autoComplete="email" required className="mt-1 block w-full px-4 py-2.5 border-ebony-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm bg-pearl-900 text-foreground placeholder-ebony-600" placeholder="seu@email.com"/>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-light-text mb-1">Telefone de Contato</label>
                <input type="tel" name="phone" id="phone" autoComplete="tel" required className="mt-1 block w-full px-4 py-2.5 border-ebony-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-dark focus:border-primary-dark sm:text-sm bg-pearl-900 text-foreground placeholder-ebony-600" placeholder="(XX) XXXXX-XXXX"/>
              </div>
            </div>
            {/* ... */}
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-eerie_black-500 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-colors duration-150 ease-in-out">
                Confirmar Reserva
              </button>
            </div>
            <p className="text-xs text-ebony-600 text-center mt-4">
              Sua reserva estará sujeita à confirmação. Entraremos em contato caso haja algum imprevisto.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}