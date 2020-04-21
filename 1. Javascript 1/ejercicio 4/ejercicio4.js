const unidad = prompt('Unidad de partida?');
const grados = prompt('Cuantos grados?');

const gradosC = (grados * 9 / 5) + 32;
const gradosF = (grados - 32) * 5 / 9;


if (unidad == 'celsius') {
    console.log(gradosF)
}

else if (unidad == 'farenheit') {
    console.log(gradosC)
}