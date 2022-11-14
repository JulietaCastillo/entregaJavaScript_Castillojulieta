const titulo = document.getElementById("titulo")
const frase = document.getElementById("frase")
const imgCarrito = document.getElementById("imgCarrito")
const container = document.getElementById("container")

titulo.innerText = "Te Leo Luego"
frase.textContent = "Libros, caminos y días dan al hombre sabiduría"
imgCarrito.src = "imagen/carrito.png"

function cargarProductos(array) {
let contenido = ""
    if (array.length > 0) {
        array.forEach(producto => {
            contenido += retornoCard (producto)
        })
        container.innerHTML = contenido
    }
}
cargarProductos(productos)

const inputSearch = document.querySelector("input#inputSearch")

function filtrarProductos() {
    if (inputSearch.value.trim() !== "") {
        let resultado = productos.filter(producto => producto.nombre.includes(inputSearch.value.trim()))
            if (resultado.length > 0) {
                cargarProductos(resultado)
            }
    }
}

