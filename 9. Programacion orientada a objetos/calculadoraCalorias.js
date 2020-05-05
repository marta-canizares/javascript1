/* PARTE 1

En “calculadoraCalorias.js” crearemos 
1. una clase llamada “CalculadoraCalorias” que
debe tener 
2. un método sumar(calorias) que recibe un valor en calorías y guarda el
resultado en una variable interna llamada caloriasConsumidas.

3. Crear un método imprimir() que imprima la frase
“Yo he consumido X calorías”
donde X es la variable local caloriasConsumidas. */


// CALCULADORA DE CALORIAS //
class CalculadoraCalorias {
    constructor() {
        this.caloriasConsumidas = 0;

    }
    sumar(calorias) {
        this.caloriasConsumidas += calorias
        return this.caloriasConsumidas;
    }
    imprimir() {
        console.log(`Yo he consumido ${this.caloriasConsumidas} calorias`);
    }
}
