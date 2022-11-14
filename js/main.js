
let nombre = "Julieta"
let apellido = "Castillo"
let anio = 2022
let mes = 10
let eleccion = confirm("Este sitio web utiliza cookies para mejorar su experiencia. Al aceptar estás consintiendo nuestro uso de cookies.")

const CURSO = "JavaScript"

//CONDICIONALES
//debugger
let respuesta = prompt("¿quieres recibir promociones a tu mail?")

if (respuesta == "si") {
    console.log("acceder");
}

//CICLO WHILE
//let login = confirm("¿Desea logearse?")
/*while(login) {
    let usuario = prompt("Ingresa tu nombre:")
    let passwd = prompt("Ingresa tu contraseña:")
        if (usuario == "Julieta" && passwd == "Castillo") {
            console.log("Bienvenid@. " + usuario)
            login = false
        }
        else { 
            console.warn("No se reconoce usuario y/o contraseña")
        }
}*/

//FUNCIONES
//debugger
const valorFijo = 20 
let importe = 0
let tituloLibro = 0
let tipoLibro = ""
let continuar = true 

const mensajeBienvenida = "Bienvenid@ a Te Leo Luego. Que libro estabas buscando? \n" +
                          "1) El Señor de los anillos, La comunidad del anillo \n" +
                          "2) El Señor de los anillos, Las dos Torres \n" +
                          "3) El Señor de los anillos, El Retorno del Rey\n" +
                          "4) Los Padecientes\n"

const mensajeLibro = "¿Que formato te interesa? \n" +
                          "A) Digital \n" + 
                          "B) Físico \n" +
                          "C) Con Ilustraciones \n"

function cotizar () {
    const respuesta = parseInt(prompt(mensajeBienvenida))
        if (respuesta === NaN) {
            console.error("Debes de ingresar un valor de acuerdo a lo sugerido")
            return
        }

        switch(respuesta) {
            case 1: //comunidad
                tipoLibro = prompt(mensajeLibro).toUpperCase().trim()
                if (tipoLibro !== "A" && tipoLibro !== "B" && tipoLibro !== "C") {
                    console.error("no seleccionaste una opcion válida")
                    return
                }

                if (tipoLibro === "A") {
                    importe = valorFijo *100
                } else if (tipoLibro === "B") {
                    importe = valorFijo *200
                } else {
                    importe = valorFijo *300  
                }                   
                break

            case 2: //torres
                tipoLibro = prompt(mensajeLibro).toUpperCase().trim()
                if (tipoLibro !== "A" && tipoLibro !== "B" && tipoLibro !== "C") {
                    console.error("no seleccionaste una opcion válida")
                    return
                }

                if (tipoLibro === "A") {
                    importe = valorFijo *150
                } else if (tipoLibro === "B") {
                    importe = valorFijo *250
                } else {
                    importe = valorFijo *350  
                }                   
                break

            case 3: //rey
                tipoLibro = prompt(mensajeLibro).toUpperCase().trim()
                if (tipoLibro !== "A" && tipoLibro !== "B" && tipoLibro !== "C") {
                    console.error("no seleccionaste una opcion válida")
                    return
                }

                if (tipoLibro === "A") {
                    importe = valorFijo *200
                } else if (tipoLibro === "B") {
                    importe = valorFijo *300
                } else {
                    importe = valorFijo *400  
                }                   
                break

            case 4: //padecientes
                tipoLibro = prompt(mensajeLibro).toUpperCase().trim()
                if (tipoLibro !== "A" && tipoLibro !== "B" && tipoLibro !== "C") {
                    console.error("no seleccionaste una opcion válida")
                    return
                }

                if (tipoLibro === "A") {
                    importe = valorFijo *50
                } else if (tipoLibro === "B") {
                    importe = valorFijo *100
                } else {
                    importe = valorFijo *200  
                }                   
                break

            default:
                console.error("Ocurrió un error inesperado")
                return
        }
        alert("El valor de tu libro es $ " + importe.toFixed(2))
}



//OBJETOS Constructores

const IVA = 1.21

class Productox {
    constructor(nombre, precio, stock) {
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = parseInt(stock)
    }
        precioFinal() {
            return (this.precio * IVA).toLocaleString()
        }

        descontarStock(unidades) {
            this.stock = this.stock - unidades
        }  
}

const producto1 = new Productox("la comunidad del anillo", 2350, 30)
const producto2 = new Productox("las dos torres", 3150, 50)
const producto3 = new Productox("las dos torres", 4780, 25)

// ARRAY
const libros = ["La comunidad del anillo", "Las 2 Torres", "Regreso del Rey", "Los Padecientes" ]

//Accede al DOM 
function agregarLibro() {
    let nuevoLibro = prompt("Ingresa un nuevo Título:")

        if (libros.includes(nuevoLibro)) {
            console.warn(nuevoLibro, "ya está en el listado.")            
        } else {
            libros.push(nuevoLibro)
            listarLibrosHTML()
        }
}

function buscarLibro() {
    let libro = prompt("Ingresa el Libro a buscar:")
        let posicion = libros.indexOf(libro)
            if (posicion === -1) {
                console.warn("No se encontró el libro", libro)
            } else {
                alert(libro + " se encuentra en la posición " + posicion)
            }
}

function quitarLibro() {
    let libro = prompt("Ingresa el libro a eliminar:")
    let posicion =  libros.indexOf(libro)
        if (posicion > -1) {
            let eliminado = libros.splice(posicion, 1)
            console.table(eliminado)
            listarLibrosHTML()
        }
}

function ordenarLibros() {
    let sort = prompt("Ingrese la forma de ordenamiento. (A ó Z)")
    if (sort.toUpperCase() === "A") {
        libros.sort()
    } else if (sort.toUpperCase() === "Z") {
        libros.sort().reverse()
    } else {
        console.warn("Ingresa un tipo de ordenamiento válido. (A ó Z")
        return 
    }
    listarLibrosHTML()
}

function listarLibrosHTML() {
    const listado = document.querySelector("Ol")
        listado.innerHTML = ""
        for (libro of libros)
            listado.innerHTML += `<li>${libro}</li>`
}
listarLibrosHTML()

function retornoCard(producto) {
    return `<div class="card" id="card${producto.id}">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}"" title="Clic para agregar '${producto.nombre}' al carrito">+</button>
                </div>
            </div>`
    }
    
function retornoError() {
return `<div class="card-error">
        <h2>Houston, tenemos un problema 🔌</h2>
        <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
        <h3>Intenta nuevamente en unos instantes...</h3>
    </div>`
}

