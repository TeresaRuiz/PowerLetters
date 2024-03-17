
// Simulamos la carga con un temporizador
let progressBarFill = document.getElementById('progressBarFill');
let width = 1;
let interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
    // Redirigir a otra página una vez que haya terminado de cargar
    window.location.href = 'inicio_publico.html';
  } else {
    width++;
    progressBarFill.style.width = width + '%';
  }
}, 20);