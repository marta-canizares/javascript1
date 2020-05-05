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

/* PARTE 2

1. En “comida.js” crearemos una nueva clase llamada “Comida” cuyo constructor
recibirá los parámetros: nombreAlimento, valorCalorico y esDulce (booleano).

2. Esta clase tendrá una función llamada “comer()” que imprimirá un log diciendo
“Acabo de comer la comida X que tenía Y calorías. Era dulce/salado.”
donde X es la comida y Y el valor calórico y debe retornar el valor calórico de la
comida. Se debe indicar si era dulce o salado

*/


// CLASE COMIDA //
class Comida {
    constructor(nombreAlimento, valorCalorico, esDulce) {
        this.nombre = nombreAlimento;
        this.calorias = valorCalorico;
        this.dulce = esDulce;

    }
    comer() {

        if (this.dulce === true) {
            console.log(`Acabo de comer la comida ${this.nombre} que tenia ${this.calorias} calorias. Era dulce`);

        } else {
            console.log(`Acabo de comer la comida ${this.nombre} que tenia ${this.calorias} calorias. Era salado`);
        }

        /* FORMAS DE HACER EL IF MAS CORTO
        let msg = `Acabo de comer la comida ${this.nombre} que tenia ${this.calorias} calorias. Era `;
        if (this.dulce === true) {
            msg += `dulce`;

        } else {
            msg += `salado`;
        }

        console.log(msg);


        let dulceSalado = this.dulce ? 'dulce' : 'salado';
        let msg = `Acabo de comer la comida ${this.nombre} que tenia ${this.calorias} calorias. Era ${dulceSalado}`;
        console.log(msg); */


        return this.calorias
    }
}

/* PARTE 2 BIS:

5. En index.js importaremos las clases “Comida”, “CalculadoraCalorias”.

6. Ahora crearemos 3 objetos usando como plantilla la clase “Comida”:
a. Un objeto llamado “huevosRevueltos”, con un valor calórico de 1.000.
b. Un objeto llamado “paella”, con un valor calórico de 1.500.
c. Un objeto llamado “merluza”, con un valor calórico de 800.
7. Ahora invocaremos las funciones “comer()” de cada uno de nuestros 3 objetos, para
que se impriman las tres frases.  */

// CREAR 3 OBJETOS //

const huevosRevueltos = new Comida('Huevos Revueltos', 1000, false);
const paella = new Comida('paella', 1500, false);
const merluza = new Comida('merluza', 800, false);
const kitkat = new Comida('kitkat', 560, true);

// MOSTRAR LAS FRASES // 
huevosRevueltos.comer();
paella.comer();
merluza.comer();
kitkat.comer();



/* PARTE 3

8. Crear entonces un objeto para la clase Calculadora en el index.js.
9. Cambiando el código, al llamar la función comer(), aplicar la función sumar para que
tengamos al final todas las calorías consumidas y mostrar en pantalla la frase de
cuántas calorías has consumido con el método imprimir
*/

const calculadora1 = new CalculadoraCalorias();

calculadora1.sumar(huevosRevueltos.comer());
calculadora1.imprimir();

calculadora1.sumar(paella.comer());
calculadora1.imprimir();

calculadora1.sumar(merluza.comer());
calculadora1.imprimir();

calculadora1.sumar(kitkat.comer());
calculadora1.imprimir();

