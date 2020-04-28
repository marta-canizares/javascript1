function numeros(array) {

    let retorno = false;

    if (array[0] === array[1] && array[1] === array[2]) {

    } if (array[1] === 4) {
        retorno = true
    }
    return retorno
}

let miArray = [1, 2, 3];

console.log(numeros(miArray))
console.log(numeros([1, 1, 3]))
console.log(numeros([1, 4, 3]))