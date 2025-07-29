// src/components/Layout.tsx

import React, { type ReactNode } from 'react'; // <-- CAMBIO AQUÍ: 'type ReactNode'
import Header from './Header'; // Importamos el componente Header

// Definimos las props que recibirá el componente Layout
interface LayoutProps {
  children: ReactNode; // 'children' es un tipo especial de prop que representa el contenido anidado
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Contenedor principal que abarca toda la altura de la pantalla
    <div className="min-h-screen bg-gray-100">
      {/* Renderizamos el componente Header */}
      <Header />

      {/* Contenido principal de la página */}
      {/* El 'children' prop renderizará cualquier contenido que se pase dentro del Layout */}
      <main className="container mx-auto p-4">
        {children}
      </main>

      {/* Puedes añadir un Footer aquí si lo deseas en el futuro */}
      {/* <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Bienes Raíces App</p>
      </footer> */}
    </div>
  );
};

export default Layout;
