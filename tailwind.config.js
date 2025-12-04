/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bari: {
          teal: '#2F5233',      // Forest Green: Naturaleza profunda
          dark: '#1e293b',      // Slate 800: Texto principal
          orange: '#E07A5F',    // Terracotta: Calidez
          gold: '#f5a941',      // Mantener para detalles premium
          cream: '#f8fafc',     // Slate 50: Fondo limpio
          slate: '#64748b',     // Slate 500: Texto secundario
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],        // Texto legal y cuerpo
        heading: ['Montserrat', 'sans-serif'], // Títulos impactantes
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(37, 66, 76, 0.1), 0 2px 4px -1px rgba(37, 66, 76, 0.06)',
        'glow': '0 0 15px rgba(55, 142, 136, 0.3)', // Brillo Teal
      }
    },
  },
  plugins: [],
}