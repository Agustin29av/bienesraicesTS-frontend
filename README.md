✅ Proyecto 2: bienesraicesTS-frontend (Frontend)
# Bienes Raíces - Frontend (React + Vite + TypeScript + TailwindCSS)

Este es el frontend de la aplicación de Bienes Raíces.  
Está desarrollado con React, Vite y TypeScript, utilizando TailwindCSS para el diseño.  
Consume los endpoints de la API desarrollada en el backend (`bienesraicesTS`).

---

## 🚀 Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Lenguaje con tipado estático que mejora el desarrollo con React.
- **Vite**: Herramienta de construcción rápida para proyectos modernos con React.
- **TailwindCSS**: Framework de CSS utilitario para estilos rápidos y responsivos.
- **ESLint**: Linter para mantener buenas prácticas de código.
- **PostCSS + Autoprefixer**: Para compatibilidad de estilos entre navegadores.

---

## 🛠️ Requisitos Previos

- [Node.js](https://nodejs.org) (versión 16+ recomendada)
- [NPM](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

---

## ⚙️ Configuración del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Agustin29av/bienesraicesTS-frontend
cd bienesraicesTS-frontend
2. Instalar dependencias
bash
Copiar
Editar
npm install
🌈 Configuración de TailwindCSS
Este proyecto ya incluye configuración básica para Tailwind:

tailwind.config.js creado con npx tailwindcss init -p

postcss.config.js para usar autoprefixer

Archivo index.css con las directivas:

css
Copiar
Editar
@tailwind base;
@tailwind components;
@tailwind utilities;
▶️ Ejecutar la Aplicación
bash
Copiar
Editar
npm run dev
Esto iniciará el servidor local de desarrollo en:

arduino
Copiar
Editar
http://localhost:5173
🔗 Integración con la API
Este frontend consume la API creada en el backend (bienesraicesTS).
Asegúrate de que la API esté corriendo en http://localhost:3000 o configurá los endpoints según tu entorno.

🧱 Estructura del Proyecto
bash
Copiar
Editar
src/
│
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables
├── pages/           # Páginas del sitio como Inicio, Nosotros, Propiedades
├── App.tsx          # Componente raíz
├── main.tsx         # Punto de entrada
├── index.css        # Estilos globales
└── vite-env.d.ts    # Tipado de Vite + TypeScript
💡 Funcionalidades
Listado de propiedades desde la API

Vista de detalle de propiedad

Navegación entre páginas (Inicio, Nosotros, Contacto, etc.)

Interfaz responsiva y estilizada con TailwindCSS

📦 Build para Producción
bash
Copiar
Editar
npm run build
👤 Autor
Desarrollado por Agustín Avilés
GitHub - Agustin29av