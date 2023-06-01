import { Cliente } from "./cliente.js";


export class Empresa extends Cliente{
    constructor(nombre, ahorro, juego, monto){
        super(nombre, ahorro, juego);
        this.monto = monto;
    }
    mostrarFondos(){
        return `El cliente de nombre: ${this.nombre} compro el videojuego de: ${this.juego} con un costo de: $${this.monto}`
    }
}