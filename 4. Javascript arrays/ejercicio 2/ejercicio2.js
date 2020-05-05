const calorias = {
    'ensalada': 152,
    'hamburguesa': 295,
    'patatas fritas': 312,
    'frankfurt': 269
}

/*
console.log(calorias['ensalada']);
console.log(calorias.ensalada);

*/


//// ejercicio para buscar el numero maximo dentro del objeto
let maxAlimento = 'nodefinido'
let maxKcal = 0

for (let productos in calorias) {
    console.log(calorias[productos])
    let alimento = productos
    let numero = (calorias[productos])

    if (numero > maxKcal) {
        maxKcal = numero
        maxAlimento = alimento
    }
}
console.log(maxAlimento, maxKcal)