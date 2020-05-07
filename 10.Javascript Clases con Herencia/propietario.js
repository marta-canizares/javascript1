import Usuario from './usuario.js';

let propietarios = document.getElementById('propietarios');

export default class Propietario extends Usuario {
    constructor(pNombre, pUsername, pPassword, pFoto) {
        super(pNombre, pUsername, pPassword);
        this.foto = pFoto;
        this.listaGato = [];
        this.listaPerro = [];
    }
    anadirGato(objGato) {
        this.gato.push(objGato);
    }

    anadirPerro(objPerro) {
        this.perro.push(objPerro);
    }
    imprimirAnimal() {
        const lis1 = document.createElement('li');
        lis1.innerHTML = `DATOS PROPIETARIO: Nombre: ${this.nombre}. Usuario: ${this.username}`
        const lis2 = document.createElement('li');
        for (let perro of this.perro) {
            lis2.innerHTML += `DATOS PERRO. Nombre: ${perro.nombre}.  Raza: ${perro.raza}. Color: ${perro.color}`;
        }

        const lis3 = document.createElement('li');
        for (let gato of this.gato) {
            lis3.innerHTML += ` DATOS GATO. Nombre: ${gato.nombre}.  Raza: ${gato.raza}. Color: ${gato.color}`;
        }

        propietarios.appendChild(lis1)
        propietarios.appendChild(lis2)
        propietarios.appendChild(lis3)

    }

    numeroTotalAnimales() {
        let total = this.listaGato.length + this.listaPerro.length

        /*     OPCION 2
                let count = 0;
                for (let perro of this.perro) {
                    count++
                }
                for (let gato of this.gato) {
                    count++
        
                } */
        return total
    }
}


