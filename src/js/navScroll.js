// Script para cambiar el color del navbar al hacer scroll
window.addEventListener("scroll", function () {
   const navbar = document.getElementById("header");
   const trigger = document.getElementById("trigger");

   // Altura del navbar
   const navbarHeight = navbar.offsetHeight;
   // Altura del div que activa el cambio de color
   const triggerHeight = trigger.offsetTop;

   // Cambiar color del navbar cuando el scroll alcance el div
   if (window.scrollY >= triggerHeight - navbarHeight) {
      navbar.classList.add("navbar-scrolled");
   } else {
      navbar.classList.remove("navbar-scrolled");
   }
});
