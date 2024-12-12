import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Ajudaí
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/client-dashboard" className="text-gray-600 hover:text-blue-500">
            Contratar Serviço
          </Link>
          <Link to="/provider-dashboard" className="text-gray-600 hover:text-blue-500">
            Oferecer Serviço
          </Link>
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Sobre Nós
          </Link>
        </nav>

        {/* Botão de Login Desktop */}
        <Link to="/login" className="hidden md:inline px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-gray-200 hover:text-blue-500">
          <span>Entrar</span>
        </Link>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden flex items-center text-gray-600 hover:text-blue-600 focus:outline-none"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/client-dashboard" className="text-gray-600 hover:text-blue-600">
              Contratar Serviço
            </Link>
            <Link to="/provider-dashboard" className="text-gray-600 hover:text-blue-600">
              Oferecer Serviço
            </Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Sobre Nós
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
