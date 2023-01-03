//Ejemplo aisalado de Promesas y SweetAlert

function confirmarCookies() {
    Swal.fire({
        title: "Este sitio utiliza cookies, ¿deseas aceptar el uso de cookies?",
        icon: "question",
        showDenyButton: true,
        confirmButtonText: "Aceptar",
        denyButtonText: "Denegar"
    })
    .then((result)=> {
        if (result.isConfirmed) {
            console.log("El usuario pulsó el botón Aceptar.")
        } else if (result.isDenied) {
            console.warn("El usuario DENEGO el uso de cookies")
        }
    })
}