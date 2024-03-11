function showAlert() {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Una vez eliminado, no podrás recuperar los siguientes datos!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminarlo!",
        cancelButtonText: "Cancelar",
        imageUrl: "../../recursos/imagenes/zorritoDt.png", // URL de la imagen que deseas mostrar
        imageAlt: "Imagen de advertencia" // Texto alternativo de la imagen
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                "¡Eliminado!",
                "El comentario ha sido eliminado.",
                "success"
            );
        } else {
            Swal.fire(
                "Cancelado",
                "Se ha cancelado la acción:)",
                "error"
            );
        }
    });
}

function showAlerta() {
    Swal.fire({
        title: "¿Estás seguro?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, bloquearlo!",
        cancelButtonText: "Cancelar",
        imageUrl: "../../recursos/imagenes/zorritoDt.png", // URL de la imagen que deseas mostrar
        imageAlt: "Imagen de advertencia" // Texto alternativo de la imagen
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                "¡Bloqueado!",
                "El usuario ha sido bloqueado.",
                "success"
            );
        } else {
            Swal.fire(
                "Cancelado",
                "Se ha cancelado la acción:)",
                "error"
            );
        }
    });
}