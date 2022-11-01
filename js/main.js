
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


