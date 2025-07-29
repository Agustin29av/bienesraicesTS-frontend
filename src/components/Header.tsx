// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // <-- NUEVO: Importamos Link de react-router-dom

const Header: React.FC = () => {
  return (
    // Contenedor principal del encabezado con estilos de Tailwind CSS
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título de la aplicación - Ahora es un Link a la página de inicio */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          Bienes Raíces App
        </Link>
        
        {/* Navegación */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              {/* Enlace a la página de inicio */}
              <Link to="/" className="hover:text-gray-300">Inicio</Link>
            </li>
            <li>
              {/* Enlace al listado de propiedades (lo crearemos pronto) */}
              <Link to="/properties" className="hover:text-gray-300">Propiedades</Link>
            </li>
            <li>
              {/* Enlace a la página de registro */}
              <Link to="/register" className="hover:text-gray-300">Registro</Link>
            </li>
            <li>
              {/* Enlace a la página de login */}
              <Link to="/login" className="hover:text-gray-300">Login</Link>
            </li>
            {/* Aquí puedes añadir más enlaces según necesites */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
