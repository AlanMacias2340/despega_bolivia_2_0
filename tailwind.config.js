/** @type {import('tailwindcss').Config} */
/* ARCHIVO DE CONFIGURACION DE TAILWIND */
module.exports = {
   content: ["./src/**/*.{html,js}", "./index.html"], // Agregamos el index.html para que lo lea tailwind
   theme: {
      extend: {
         animation: {
           blob: 'blob 7s infinite'
         },
         keyframes: {
           blob: {
             '0%': {
               transform: 'translate(0px, 0px) scale(1)'
             },
             '33%': {
               transform: 'translate(30px, -50px) scale(1.1)'
             },
             '66%': {
               transform: 'translate(20px, -20px) scale(0.9)'
             },
             '100%': {
               transform: 'translate(0px, 0px) scale(1)'
             },
           }
         }
       },
      /* Medidas Responsive Personalizadas */
      /* screens: {
      'celular-small': {'min': '320px', 'max': '400px'},
      'celular-medium': {'min': '400px', 'max': '640px'},
      }, */
   },
   plugins: [],
};
