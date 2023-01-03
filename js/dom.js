const busquedas = []
const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const imgCarrito = document.getElementById("imgCarrito")
const footer = document.getElementById("footer")
const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const botonVaciar = document.getElementById('vaciarCarritoTLL')
const URL = 'basedatos/productos.json'
const productos = []

let eleccion = confirmarCookies()


fetch(URL)
    .then((response)=> data = response.json())
    .then((data) => productos.push(...data))
    .then(() => cargarProductos(productos))
    .then(() => activarClickBotones())
    .catch(error => console.error (error))
    
    
imgCarrito.addEventListener("mousemove", ()=> {
    let totalProductos = carrito.length
    imgCarrito.title = `${totalProductos} libro/s en carrito de compras`
})

titulo.innerText = "Te Leo Luego"
slogan.innerHTML = "<h2 class='sub_titulo'>Tu tienda de libros online</h2>"
imgCarrito.src = "imagen/carrito.png"
footer.innerHTML = "<p class='texto_footer'>Estudiante: Castillo Julieta - Comisión 34095 JavaScript</p>"

//funcion que lee el array de productos, lo recorre y arma las cards 
function cargarProductos(array) {
     let contenido = ""
        if (array.length > 0) {
            array.forEach(producto => {
                contenido += retornoCard(producto)
            })
            container.innerHTML = contenido
         }
}

function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.button.button-outline.button-add")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
                carrito.push(resultado)
                localStorage.setItem("CarritoTLL", JSON.stringify(carrito))
                Swal.fire('El producto se agrego correctamente al carrito')
        })
    })
}

//barra para filtrar productos. Combinado con el Input Search 
function filtrarProductos() { 
    let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    if (resultado.length > 0) {
        cargarProductos(resultado) 
        activarClickBotones()
    }
    else {
    console.warn("No se han encontrado coincidencias.")
    }
}

//Aplico operador ternario
inputSearch.addEventListener("search", ()=> {
    inputSearch.value.trim() !== "" ? filtrarProductos() : cargarProductos(productos)
})

