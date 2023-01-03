footer.innerHTML = "<p class='texto_footer'>Estudiante: Castillo Julieta - Comisión 34095 JavaScript</p>"

function recuperarCarritoTLL() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("CarritoTLL"))
    
    if (carrito.length > 0) {
        carrito.forEach(libro => tablaHTML += armarTablaCarrito(libro))
        tbody.innerHTML = tablaHTML
        calcularTotal()
    }
}
recuperarCarritoTLL()

function activarBotonesDelete() {
    const buttonsDelete = document.querySelectorAll("button.button-add")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let pos = carrito.findIndex(libro => libro.nombre === btn.id)
            if (pos > -1) {
                carrito.splice(pos, 1)
                localStorage.setItem("CarritoTLL", JSON.stringify(carrito))
                recuperarCarritoTLL()
                activarBotonesDelete()
            }
        })
    })
}
activarBotonesDelete()

function calcularTotal() {
    let total = document.querySelector("h3#total")
    let totalCarritoTLL = carrito.reduce((acc, libro)=> acc + libro.precio, 0) 
        total.innerHTML = `Total: $ ${totalCarritoTLL.toLocaleString()}`
}

const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", ()=> {
    Swal.fire({
        title: '¿Estas seguro que quieres hacer esta compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        showCancelButton: 'Cancelar',
      })
      .then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("CarritoTLL")
            carrito.length = 0
            Swal.fire("Gracias por elegirnos", '')
                .then(()=> {
                    location.href = 'index.html'
                })
        }
      }) 
})

