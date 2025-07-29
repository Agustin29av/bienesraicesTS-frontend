// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario después del login

const LoginPage: React.FC = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Para mensajes de éxito o error
  const navigate = useNavigate(); // Hook para la navegación programática

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)
    setMessage(''); // Limpia mensajes anteriores

    try {
      // Realiza la petición POST a tu API de backend
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indica que estamos enviando JSON
        },
        body: JSON.stringify({ email, password }), // Convierte los datos a JSON
      });

      const data = await response.json(); // Parsea la respuesta del servidor

      if (response.ok) { // Si la respuesta es exitosa (código 2xx)
        setMessage(`Login exitoso: ${data.message || 'Bienvenido.'}`);
        // Almacena el token JWT en el localStorage (o en un contexto global)
        localStorage.setItem('token', data.token);
        // Redirige al usuario a la página de inicio o propiedades después del login
        setTimeout(() => {
          navigate('/'); // Redirige a la página de inicio
        }, 1500); // Espera 1.5 segundos antes de redirigir
      } else { // Si hay un error en la respuesta
        setMessage(`Error al iniciar sesión: ${data.message || 'Credenciales inválidas.'}`);
      }
    } catch (error) {
      // Captura errores de red o de la petición
      console.error('Error de red o petición:', error);
      setMessage('Error de conexión con el servidor. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        {message && ( // Muestra el mensaje si existe
          <p className={`mb-4 text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
