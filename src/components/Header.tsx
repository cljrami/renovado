import React from 'react';
import { Menu, Search, User, PlusCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#1a1a1a] text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold flex items-center gap-2">
              <span className="text-red-600">SEXO</span>SUR
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-8 text-sm font-medium text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Inicio</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">Iniciar Sesión</a>
              <a href="#" className="hover:text-white transition-colors">Registro</a>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold text-sm flex items-center gap-2 transition-colors">
              Anúnciate
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#111] py-2 overflow-x-auto whitespace-nowrap border-t border-gray-800 no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex gap-4 text-xs font-medium text-gray-400">
          <span className="text-red-500">SEXONORTE</span>
          <span>SEXOSUR</span>
          <span>SOYESCORT</span>
          <span>SOYAGENCIA</span>
        </div>
      </div>
    </header>
  );
};
