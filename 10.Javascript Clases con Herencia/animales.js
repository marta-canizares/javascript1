
export default class Animales {
    constructor(pNombre, pRaza, pColor) {
        this.nombre = pNombre;
        this.raza = pRaza;
        this.color = pColor;
    }
    imprimir() {
        return (`Nombre: ${this.nombre}. Raza: ${this.raza}. Color: ${this.color}`)
    }
    /*
        get nombre() {
            return this.nombre;
        }
        set nombre(pNombre) {
            this.nombre = pNombre; 
        }*/

}


