const starContainer = document.getElementById("star-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  starContainer.appendChild(star);

  const xPos = Math.random() * (window.innerWidth-1);
  const yPos = Math.random() * window.innerHeight;
  const duration = Math.random() * 10 + 5; // Duración aleatoria de la animación

  star.style.left = `${xPos}px`;
  star.style.top = `${yPos}px`;
  star.style.animationDuration = `${duration}s`;
}

// Generar múltiples estrellas fugaces
for (let i = 0; i < 50; i++) {
  createStar();
}