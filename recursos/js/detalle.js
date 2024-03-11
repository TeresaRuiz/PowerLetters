function AlertF() {
    swal({
        title: "¡Bien hecho!",
        text: "¡Se ha finalizado el pedido!",
        icon: "success",
        button: "OK",
    });

}

function AlertE() {
    swal({
        title: "¡Bien hecho!",
        text: "¡Se ha realizado la entrega!",
        icon: "success",
        button: "OK",
    });

}



function AlertP() {
    Swal.fire({
        title: "¿Estas seguro que quieres dejar en pendiente este pedido?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro!",
        cancelButtonText: "Cancelar",
        imageUrl: "../recursos/imagenes/zorritoDt.png", // URL de la imagen que deseas mostrar
        imageAlt: "Imagen de advertencia" // Texto alternativo de la imagen
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                "¡Se ha asignado el estado pendiente!",


            );
        } else {
            Swal.fire(
                "Cancelado",
                "Se ha cancelado",
                "error"
            );
        }
    });
}

function AlertC() {
    swal({
        title: "¡Bien hecho!",
        text: "¡El pedido ha sido cancelado!",
        icon: "success",
        button: "OK",
    });

}


