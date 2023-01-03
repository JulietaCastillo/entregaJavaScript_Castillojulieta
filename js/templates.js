let imagen = "imagen/carrito.png"

//Uso Operador Lógico OR
const carrito = JSON.parse(localStorage.getItem("CarritoTLL")) || []

function retornoCard({id, imagen, nombre, precio}) {
    return `<div class="card" id="card${id}">
                <div class="card-image"><img src="${imagen}" class="img_libros"></div>
                <div class="card-name">${nombre}</div>
                <div class="card-price">${precio.toFixed(2)}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${id}"" title="Clic para agregar '${nombre}' al carrito">+</button>
                </div>
            </div>`
    }
    
function retornoError() {
return `<div class="card-error">
            <h2>ERROR</h2>
            <h3>No se pudo cargar los productos.</h3>
            <h3>Espera unos minutos y vuelve a intentarlo.</h3>
        </div>`
}

//Armo carrito
function armarTablaCarrito(libro) {
    return `<tr>
                <td class="tabla_nombre">${libro.nombre}</td>
                <td class="tabla_precio">${libro.precio}</td>
                <td><button class="button button-add" id="${libro.nombre}">X</button></td>
            </tr>`
}