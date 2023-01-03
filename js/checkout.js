footer.innerHTML = "<p class='texto_footer'>Estudiante: Castillo Julieta - Comisión 34095 JavaScript</p>"

function recuperarCarritoTLL() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("CarritoTLL"))
    
    if (carrito.length > 0) {
        carrito.forEach(libro => {
            tablaHTML += armarTablaCarrito(libro)
        });
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarritoTLL()

function activarClickBotones() {
    const buttonsDelete = document.querySelectorAll("button.button-add")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
        })
    })
}


