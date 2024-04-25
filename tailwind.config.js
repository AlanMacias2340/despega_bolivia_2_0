/** @type {import('tailwindcss').Config} */
/* ARCHIVO DE CONFIGURACION DE TAILWIND */
module.exports = {
   content: ["./src/**/*.{html,js}", "./index.html"], // Agregamos el index.html para que lo lea tailwind
   theme: {
      extend: {},
      /* Medidas Responsive Personalizadas */
      /* screens: {
      'celular-small': {'min': '320px', 'max': '400px'},
      'celular-medium': {'min': '400px', 'max': '640px'},
      }, */
   },
   plugins: [],
};
