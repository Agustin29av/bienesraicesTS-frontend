// src/App.tsx

import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos los nuevos componentes de página
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

// Componentes de "página" de ejemplo (mantendremos estos por ahora)
const HomePage = () => (
  <div className="flex items-center justify-center py-10">
    <h1 className="text-4xl font-bold text-gray-800 p-6 rounded-lg shadow-lg bg-white">
      ¡Bienvenido a Bienes Raíces App!
    </h1>
  </div>
);

const PropertiesPage = () => (
  <div className="flex items-center justify-center py-10">
    <h1 className="text-4xl font-bold text-gray-800 p-6 rounded-lg shadow-lg bg-white">
      Listado de Propiedades
    </h1>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          {/* Usamos los componentes de página reales aquí */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
