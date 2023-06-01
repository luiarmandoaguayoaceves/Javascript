export const nombreCliente = 'Luis Armando';
export const juego = 'Mosnter Hunter';
export const monto = 500;
export const fondos = 1000;

export function ahorrar(nombre, juego, monto){
    return `El cliente de nombre: ${nombre} compro el videojuego de: ${juego} con un costo de: $${monto}`
}

export function saldo(fondos){
    if (fondos >= monto) {
        console.log('Si puede compara el juego ');
    } else {
        console.log('No ajustas para el juego');
    }
}

export class Cliente {
    constructor(nombre, fondos, juego, monto){
        this.nombre = nombre;
        this.fondos = fondos;
        this.juego = juego;
        this.monto = monto;

    }
    mostrarFondos(){
        return `El cliente de nombre: ${this.nombre} compro el videojuego de: ${this.juego} con un costo de: $${this.monto}`
    }
}

export default function nuevoExport(){
    console.log('Este es el nuevo export default');
}