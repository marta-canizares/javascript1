const letras = [];
const pizarra = 'pizarra';

for (let i = 0; i <= pizarra.length - 1; i++) {
    if (i % 2 === 0) {    // si quisiseramos hacer los impares, habria que poner la condicion contraria != saldrian los "impares"
        letras.push(pizarra[i]);
    }
}
console.log(letras);


