/* PARTE 3

8. Crear entonces un objeto para la clase Calculadora en el index.js.
9. Cambiando el código, al llamar la función comer(), aplicar la función sumar para que
tengamos al final todas las calorías consumidas y mostrar en pantalla la frase de
cuántas calorías has consumido con el método imprimir
*/


// CREAR CALCULADORA QUE SUME LAS CALORIAS //
const calculadora1 = new CalculadoraCalorias();

calculadora1.sumar(huevosRevueltos.comer());

calculadora1.sumar(paella.comer());

calculadora1.sumar(merluza.comer());

calculadora1.sumar(kitkat.comer());
calculadora1.imprimir(); // me imprime todas las calorias sumadas de los objetos anteriores

