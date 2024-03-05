function showAlert() {
    swal("Código Enviado", "", "success");
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    setTimeout(function() {
        // Enviar manualmente el formulario después de 2 segundos
        window.location.href = "recuperacionp2.html";
    }, 2000); // Redirigir después de 2 segundos (2000 milisegundos)
}
