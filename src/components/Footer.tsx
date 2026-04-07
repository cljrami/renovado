import React from 'react';
import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-red-600">SEXO</span>SUR
          </div>
          <p className="text-sm leading-relaxed">
            Portal sobre escorts y masajistas para mayores de 18 años. No poseemos vinculación laboral con las anunciantes y nos limitamos exclusivamente a brindar un servicio publicitario. Somos un medio publicitario legalmente constituido. Nos reservamos el derecho a publicación.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Páginas</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Panel Escort</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Panel Agencia</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Iniciar Sesión</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Regístro</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Anúnciate</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ayuda</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Nuestros Portales</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">SexoNorte</a></li>
            <li><a href="#" className="hover:text-white transition-colors">ZonaEscorts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SexoSur</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-red-600" />
              <span>Santiago, Chile</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-red-600" />
              <span>contacto@zonaescorts.cl</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-red-600" />
              <span>+56 9 5410 0003</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-red-600" />
              <span>+56 9 9845 0284</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-red-600" />
              <span>+56 9 5093 5050</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        © 2026 Copyright: <a href="#" className="text-red-600">sexosur.cl</a>
      </div>
    </footer>
  );
};
