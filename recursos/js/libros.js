/*Funcion de boton eliminar*/
function showAlert() {
    swal({
        title: "¡Bien hecho!",
        text: "Los datos han sido eliminados!",
        icon: "success",
        button: "OK",
    });
}


/*Funcion de boton agregar*/
function Agregar() {
    swal({
        title: "¡Bien hecho!",
        text: "Los datos han sido agregados!",
        icon: "success",
        button: "OK",
    });

}

/*Funcion de boton actualizado*/
function showAlertaA() {
    swal({
        title: "¡Bien hecho!",
        text: "Los datos han sido actualizados!",
        icon: "success",
        button: "OK",
    });

}


/*Funcion de boton editar*/

function showAlerta() {
    Swal.fire({
        title: "¿Estas seguro que quieres editar los datos?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, editarlo!",
        cancelButtonText: "Cancelar",
        imageUrl: "../../recursos/imagenes/zorritoDt.png", // URL de la imagen que deseas mostrar
        imageAlt: "Imagen de advertencia" // Texto alternativo de la imagen
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                "¡Se ha dado acceso para el cambio de datos !",


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


/*Funcion de datos del libro(boton de leer más)*/
function alertaemergt() {
    var parrafo1 = "pf1";

    var parrafo2 = "pf2";
    Swal.fire({
        title: 'Los tres cerditos',
        imageUrl: "../../recursos/imagenes/cerditos.png",
        html: ' <h3>Joseph Jacobs</h3><p>En el corazón del bosque vivían los tres cerditos, que eran hermanos. Resulta que estos cerditos siempre eran perseguidos por un lobo que se los quería comer. Para escapar de este lobo, los cerditos decidieron hacerse una casa. El pequeño la hizo de paja, para acabar antes y poder irse a jugar.",</p><h3>Genero</h3><p>Fabula</p><h3>Clasificación</h3><p>Infantil</p><h3>Editorial</h3><p>Combel Editoria</p>'

    });
}


/*Funcion de añadir imagen*/
document.getElementById('filePicker').addEventListener('click', function () {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function () {
            var img = new Image();
            img.src = reader.result;
            img.style.width = '240px'; // Cambia el tamaño de la imagen
            img.style.height = '220px'; // Cambia el tamaño de la imagen
            img.style.display = 'block'; // Hace que la imagen sea un bloque para poder centrarla
            img.style.margin = '-165px'; // Centra la imagen horizontalmente
            document.getElementById('imageContainer').appendChild(img);
        };

        reader.readAsDataURL(file);
    };

    input.click();
});