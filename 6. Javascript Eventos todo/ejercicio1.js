// quiero un click en el boton y cambiar css de un p
const btnPulsa = document.getElementById('btnPulsa');
const p2 = document.getElementById('p2');
const p1 = document.getElementById('p1');
const boton2 = document.getElementById('boton2')
const titulo1 = document.getElementById('titulo1')


function cambiaColor() {
    const p2 = document.getElementById('p2');
    p2.style.color = 'red';
    console.log('boton pulsado')
}

btnPulsa.addEventListener('click', (event) => {
    cambiaColor()
})



// quiero que al pasar el raton sobre el segundo p, el primero se ponga en azul

function cambiaColorP() {
    const p1 = document.getElementById('p1');
    p1.style.color = "blue"
}

p2.addEventListener('mouseover', (event) => {
    cambiaColorP()
})


// segundo boton que cambia el padding del primer p a 30px y fondo amarillo
function cambiarPadding() {
    const p1 = document.getElementById('p1');
    p1.style.padding = '30px'
    p1.style.backgroundColor = 'yellow'
}

boton2.addEventListener('click', (event) => {
    cambiarPadding()

})

// al clicar en el h1, el contendido de las p deben intercambiarse
function intercambiarP() {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const cambio1 = p1.innerHTML
    const cambio2 = p2.innerHTML

    p2.innerHTML = cambio1
    p1.innerHTML = cambio2
}


titulo1.addEventListener('click', (event) => {
    intercambiarP()
})


//// hacer una caja negra centrada en la pantalla  y dos botones con una flecha para la izquierda y otra para la derecha ////
/// al clicar a la derecha debe moverse a la derecha, y a la izquierda debe moverse a la izquierda //

