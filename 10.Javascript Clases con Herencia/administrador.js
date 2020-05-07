import Usuario from './usuario.js';


export default class Administrador extends Usuario {
    constructor(pNombre, pUsername, pPassword, ) {
        super(pNombre, pUsername, pPassword);
    }

    agregarGato() {
        alert('Eres administrador, no puedes insertar animales')
    }

    agregarPerro() {
        alert('Eres administrador, no puedes insertar animales')
    }
}