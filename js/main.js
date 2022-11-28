
let nombre = "Julieta"
let apellido = "Castillo"
let anio = 2022
let mes = 11
let eleccion = confirm("Este sitio web utiliza cookies para mejorar su experiencia. Al aceptar estás consintiendo nuestro uso de cookies.")

const CURSO = "JavaScript"

//CONDICIONALES
//debugger
let respuesta = prompt("¿quieres recibir promociones a tu mail?")

if (respuesta == "si") {
    console.log("acceder");
}

const tbody = document.querySelector("tbody")

//Guardo y Recupero el Carrito con LocalStorage + JSON
const carrito = []
const guardarCarrito = ()=> (carrito.length > 0) && localStorage.setItem("CarritoLibos", JSON.stringify(carrito))
const recuperarCarrito = ()=> JSON.parse(localStorage.getItem("CarritoLibros")) || []
carrito.push(...recuperarCarrito())

//Armo tabla HTML dinámica

const armarTablaHTML = (libro)=> {
    return `<tr>
                <td><img src="${libro.imagen}" height=250px ></td>
                <td><h4>${libro.tipo}</h4></td>
                <td>$ ${libro.precio}</td>
                <td>
                    <button id="${libro.codigo}" class="button button-outline" title="Agregar al carrito">🛒</button>
                </td>
            </tr>`
}

//Cargo productos en tabla HTML

const cargarProductos = (array)=> {
    let tablaHTML = ""
        if (array.length > 0) {
            array.forEach((libro) => tablaHTML += armarTablaHTML(libro))
        } else {
            tablaHTML = "<h2 class='error-libros'>Error al cargar productos.</h2>"
        }
        tbody.innerHTML = tablaHTML
}

//Activa evento CLICK 
const activarClickBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll("button.button.button-outline")
          botonesAdd.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                let resultado = buscarLibros(e.target.id)
                    carrito.push(resultado)
                    guardarCarrito()
            })
          })
}

cargarProductos(libros)
activarClickBotonesAdd()

const buscarLibros = (codigo)=> libros.find(libro => libro.codigo === parseInt(codigo))

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            return 
        }
        let libroElegido = buscarLibros(codigo)
            carrito.push(libroElegido)
        let respuesta = confirm("¿Deseas llevar algún otro libro?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}

function verCarrito() {
    if (carrito.length > 0) {
        const shopping = new Compra(carrito)
        alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    } else {
        alert("El carrito está vacío!")
    }
}

const btnVerCarrito = document.querySelector("button#verCarrito")
btnVerCarrito.addEventListener("click", verCarrito)