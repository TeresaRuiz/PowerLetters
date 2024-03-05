function showAlerta() {
    swal("Sesión iniciada", "Iniciaste sesión con éxito", "success");
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    setTimeout(function() {
        // Enviar manualmente el formulario después de 2 segundos
        window.location.href = "inicio.html";
    }, 2000); // Redirigir después de 2 segundos (2000 milisegundos)
}