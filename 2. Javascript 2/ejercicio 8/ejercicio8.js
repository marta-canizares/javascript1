const tacos = ['carne', 'frijoles', 'pimiento verde', 'brocoli']
const sopa = ['fideos', 'brocoli', 'caldo', 'pollo']
const pizza = ['masa', 'base de tomate', 'brocoli', 'bacon', 'queso']

let lista_compra = []

for (let i = 0; i <= tacos.length - 1; i++) {
    if (tacos[i] != 'brocoli') {
        lista_compra.push(tacos[i])
    }
}

for (let i = 0; i <= sopa.length - 1; i++) {
    if (sopa[i] != 'brocoli') {
        lista_compra.push(sopa[i])
    }
}

for (let i = 0; i <= pizza.length - 1; i++) {
    if (pizza[i] != 'brocoli') {
        lista_compra.push(pizza[i])
    }
}

console.log(lista_compra)