// src/components/layout/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {currentYear} Nome do Restaurante. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">
          Endereço: Rua Exemplo, 123 - Cidade, Estado
        </p>
        <p className="text-sm text-gray-400">
          Telefone: (XX) XXXX-XXXX
        </p>
        {/* Adicionar links para redes sociais aqui */}
      </div>
    </footer>
  );
}