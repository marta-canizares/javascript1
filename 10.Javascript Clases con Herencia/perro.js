import Animales from './animales.js';

export default class Perro extends Animales {
    constructor(pNombre, pRaza, pColor, pPedigree) {
        super(pNombre, pRaza, pColor);
        this.pedigree = pPedigree;

    }
    imprimir() {
        return super.imprimir() + ` Pedigree: ${this.pedigree}`
    }
}

