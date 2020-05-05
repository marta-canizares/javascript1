function multiplo(valor) {
    if (valor % 3 == 0 || valor % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(multiplo(21));
console.log(multiplo(14));
console.log(multiplo(10));
console.log(multiplo(16));