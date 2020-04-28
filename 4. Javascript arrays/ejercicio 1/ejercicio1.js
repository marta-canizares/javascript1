
const calorias = {
    'ensalada': 152,
    'hamburguesa': 295,
    'patatas fritas': 312,
    'frankfurt': 269
}
console.log(calorias['ensalada']);
console.log(calorias.ensalada);


let keys = Object.keys(calorias); // ['ensalada','hamburguesa','patatas fritas','frankfurt']

for (let i = 0; i < keys.length; i++) {
    let key = keys[i]; // 'ensalada'        'hamburgusesa'...

    let numero = calorias[key]; // 152        295

    console.log("I: " + i);
    console.log("CLAVE: " + key);
    console.log("NUMERO: " + numero);

    if (numero >= 300) {
        console.log(calorias[key.numero])
    }
}



// SOLUCION CON FOR IN
for (let productos in calorias) {
    if (calorias[productos] >= 300)
        console.log(productos, calorias[productos]) // PARA QUE SE VEA MAS BONITO   console.log(productos, + ':' + calorias[productos])
}
