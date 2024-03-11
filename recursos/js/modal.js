// Obtener el modal y el botón para cerrarlo
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const editButton = document.querySelector('.button');

// Mostrar el modal al hacer clic en "Editar perfil"
editButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al contenedor padre
    modal.style.display = 'block';
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal al presionar la tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

// Capturar los datos del formulario al enviarlo
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página

    // Aquí puedes agregar la lógica para capturar y procesar los datos del formulario
    // Por ahora, simplemente cerraremos el modal
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de él (excepto en el botón de edición)
window.addEventListener('click', function(event) {
    if (event.target === modal && event.target !== editButton) {
        modal.style.display = 'none';
    }
});