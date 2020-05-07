
export default class Usuario {
    constructor(pNombre, pUsername, pPassword) {
        this.nombre = pNombre;
        this.username = pUsername;
        this.password = pPassword;
    }
    imprimir() {
        return (`Nombre: ${this.nombre}. Username: ${this.username}.`)
    }
}