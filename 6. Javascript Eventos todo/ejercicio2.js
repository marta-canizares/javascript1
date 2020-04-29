const cuadrado = document.getElementById('cuadrado')
const btnIzquierda = document.getElementById('boton1')
const btnDerecha = document.getElementById('boton2')


let margin = 0

// MOVIMIENTO CON CLICK A LA DERECHA//
function derecha() {
    const cuadrado = document.getElementById('cuadrado')
    margin = margin + 30;
    cuadrado.style.marginLeft = `${margin}px`;
}

btnDerecha.addEventListener('click', derecha) // como tengo la funcion no hace falta que haga la arrow function


// MOVIMIENTO CON CLICK A LA IZQUIERDA//
function izquierda() {
    const cuadrado = document.getElementById('cuadrado')
    margin = margin - 30;
    cuadrado.style.marginLeft = `${margin}px`;
}

btnIzquierda.addEventListener('click', izquierda)  // como tengo la funcion no hace falta que haga la arrow function



// MOVIMIENTO CON LAS FLECHAS // // HAY QUE BUSCAR CON KEYDOWN, SI NO, NO APARECEN //
document.addEventListener('keydown', (event) => {
    console.log(event.keyCode)
    switch (event.keyCode) {
        case 37: izquierda()
            break;
        case 39: derecha()
            break;
        default:
            console.log('Tecla no reconocida')
    }
})


////////////////////////////////////////////////////////////
/*   RESOLUCION POR MARIO DEL MOVIMIENTO DE LAS FLECHAS

const cuadrado = document.getElementById('cuadrado')
const btnIzquierda = document.getElementById('boton1')
const btnDerecha = document.getElementById('boton2')

let left = 0;
// si no vamos a utilizar el evento no es necesario crearlo
btnIzquierda.addEventListener('click', () => {
    margin -= 10;
    cuadrado.style.marginLeft = `${ left } px`;
})

btnDerechabtnDerecha.addEventListener('click', () => {
    margin += 10;
    cuadrado.style.marginLeft = `${ left } px`;
})


// TODO EN UNA FUNCION //  Hemos asignado un data-direccion al HTML
let left = 0
function mover(event) {
    const direccion = event.target.dataset.direccion;
    if (direccion === 'der') {
        left += 10
    } else {
        left -= 10;
    }
    caja.style.marginLeft = `${left}px`;
}

btnIzquierda.addEventListener('click', mover)
btnDerecha.addEventListener('click', mover)

// TERNARIO //
function mover(event) {
    const direccion = event.target.ddataset.direccion;

    left = (direccion === 'der') ? (left + 10) : (left - 10)
    caja.style.marginLeft = `${left}px`;
}

btnIzquierda.addEventListener('click', mover)
btnDerecha.addEventListener('click', mover)

*/
