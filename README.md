Bienes Raíces App (Frontend)
Este es el frontend de la aplicación de Bienes Raíces, desarrollado con React y estilizado con Tailwind CSS. Se conecta a la API del backend para gestionar y mostrar información sobre propiedades, usuarios y vendedores.

🚀 Tecnologías Utilizadas
React: Biblioteca JavaScript para construir interfaces de usuario.

TypeScript: Lenguaje de programación que añade tipado estático a JavaScript.

Vite: Herramienta de construcción rápida para proyectos web.

Tailwind CSS: Framework CSS de utilidad para un diseño rápido y responsivo.

React Router DOM: Para la navegación y el enrutamiento en la aplicación.

⚙️ Configuración del Proyecto
Sigue estos pasos para configurar y ejecutar el frontend localmente.

1. Clonar el Repositorio
git clone <URL_DE_TU_REPOSITORIO_FRONTEND>
cd bienesraices-frontend

2. Instalar Dependencias
npm install

▶️ Ejecutar la Aplicación
Para iniciar el servidor de desarrollo:

npm run dev

La aplicación estará disponible en http://localhost:5173/ (o el puerto que Vite te asigne).

🤝 Conexión con el Backend
¡Importante! Para que esta aplicación funcione correctamente, el backend de Bienes Raíces (disponible en su propio repositorio) debe estar ejecutándose en http://localhost:3000. Asegúrate de iniciar el backend antes de ejecutar el frontend.

✨ Características Principales (Actuales)
Navegación: Utiliza React Router DOM para la navegación entre páginas.

Registro de Usuarios: Formulario para crear nuevas cuentas de usuario.

Inicio de Sesión: Formulario para que los usuarios existentes inicien sesión y obtengan un token JWT.

Estilos Modernos: Implementado con Tailwind CSS para un diseño limpio y responsivo.

🔜 Próximas Funcionalidades
Gestión del estado de autenticación global (Auth Context).

Página de listado de propiedades.

Página de detalle de propiedad.

Formularios para crear, editar y eliminar propiedades (protegidos por rol).

Manejo de roles de usuario en la interfaz (comprador, vendedor, administrador).