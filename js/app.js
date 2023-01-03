const selectProvincia = document.querySelector("#provincia")
const selectUbicacion = document.querySelector("#ubicacion")
const inputLibros = document.querySelector("#libros")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorEnvio = document.querySelector("#valorEnvio")


const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
    } else {
        alert("No hay elementos en el array.")
        btnCotizar.disabled = true
    }
}
cargarCombo(selectProvincia, datosProvincia)
cargarCombo(selectUbicacion, datosUbicacion)

//valido que el usuario haya seleccionado todo del HTML
const datosCompletos = ()=> (selectProvincia.value !== "..." && selectUbicacion.value !== "..." && inputLibros.value >= 1)

//Instancio el cotizador y llamo al método cotizar()
const cotizo = ()=> {
    const coti = new Cotizador(inputLibros.value, selectProvincia.value, selectUbicacion.value, costoEnvio)
          valorEnvio.innerText = coti.cotizar()
}

const loading = ()=> `<img src="imagen/loading.gif" width="70px">`

const numeroAlAzar = ()=> parseInt(Math.random() * 5_000)

const realizarCotizacion = ()=> {
    if (datosCompletos()) {
        btnCotizar.innerHTML = loading()
        setTimeout(() => {
            cotizo()
            btnCotizar.innerText = "COTIZAR"
        }, numeroAlAzar())
    } else {
        //alert("Por favor, completar los datos faltantes.")
        alerta('warning', 'Error', 'Por favor completar todos los datos')
    }
}

btnCotizar.addEventListener("click", realizarCotizacion)
const historial = JSON.parse(localStorage.getItem("UltimaCotizacion")) || []

const alerta = (icon, title, text) => {
Swal.fire({
    icon: icon ||'',
    title: title || '',
    text: text || 'mensaje',
  })
}
