import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Direitos Reservados */}
          <p className="text-sm text-center md:text-left">
            © 2024 Ajudaí - Todos os direitos reservados.
          </p>

          {/* Links Úteis */}
          <nav className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
