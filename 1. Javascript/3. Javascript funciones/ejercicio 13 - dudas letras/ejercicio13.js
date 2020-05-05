function cuantasVeces(palabra, letra) {
    let total = []
    for (let i = 0; i <= palabra.lenght; i++) {
        if (palabra[i] === letra) {
            total.push(palabra[i])
        }
    } return total
}

console.log(cuantasVeces('martina', 'a'))
