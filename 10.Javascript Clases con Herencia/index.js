import Animales from './animales.js';
import Perro from './perro.js';
import Gato from './gato.js';
import Usuario from './usuario.js';
import Administrador from './administrador.js';
import Propietario from './propietario.js';





// CREACION DE ANIMALES //
const perro1 = new Perro('babu', 'bullog frances', 'marron', true);
const perro2 = new Perro('polo', 'american bully', 'gris', true);
const perro3 = new Perro('gordi', 'mezcla', 'blanco y marron', false);

const gato1 = new Gato('pollo', 'persa', 'blanco');
const gato2 = new Gato('satanas', 'gato egipcio', 'con manchas');
const gato3 = new Gato('nala', 'mezlca', 'blanco y marron')

// CREACION DE LI E IMPRESION DE LOS ANIMALES //
let animales = document.getElementById('animales');
const li1 = document.createElement('li');
li1.innerHTML = perro1.imprimir()
const li2 = document.createElement('li');
li2.innerHTML = perro2.imprimir()
const li3 = document.createElement('li');
li3.innerHTML = perro3.imprimir()
const li4 = document.createElement('li');
li4.innerHTML = gato1.imprimir()
const li5 = document.createElement('li');
li5.innerHTML = gato2.imprimir()
const li6 = document.createElement('li');
li6.innerHTML = gato3.imprimir()

animales.appendChild(li1)
animales.appendChild(li2)
animales.appendChild(li3)
animales.appendChild(li4)
animales.appendChild(li5)
animales.appendChild(li6)


// CREAR UN ADMINISTRADOR Y TRES PROPIETARIOS //
const admin1 = new Administrador('Manuel', 'Manuel88', 123456);

const user1 = new Propietario('Rosa', 'Rosa23', 598745);
const user2 = new Propietario('Davinia', 'Davi78', 896325);
const user3 = new Propietario('David', 'Piedra45', 4123969);


// LISTA DE LOS USUARIOS //
let usuarios = document.getElementById('usuarios');
const lis1 = document.createElement('li');
lis1.innerHTML = admin1.imprimir()
const lis2 = document.createElement('li');
lis2.innerHTML = user1.imprimir()
const lis3 = document.createElement('li');
lis3.innerHTML = user2.imprimir()
const lis4 = document.createElement('li');
lis4.innerHTML = user3.imprimir()


usuarios.appendChild(lis1)
usuarios.appendChild(lis2)
usuarios.appendChild(lis3)
usuarios.appendChild(lis4)

// VINCULAR LOS ANIMALES A LOS USUARIOS UTILIZANDO LA FUNCION AÑADIR PERRO / GATO
user1.anadirPerro(perro1)
user1.anadirGato(gato1)

user2.anadirPerro(perro2)
user2.anadirGato(gato2)
user2.anadirGato(gato3)

user3.anadirPerro(perro3)
user3.anadirGato(gato3)

console.log(user1)
console.log(user2)
console.log(user3)


// Metodo imprimir propietarios y sus animales //

user1.imprimirAnimal();
user2.imprimirAnimal();
user3.imprimirAnimal();


// imprimir propietarios y el numero de mascotas que posee //
console.log(user1.numeroTotalAnimales());
console.log(user2.numeroTotalAnimales());
console.log(user3.numeroTotalAnimales());