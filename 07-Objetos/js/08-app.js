//Congelar objeto para que no lo modifiquen 

"use strict"
const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true
}
//Este freeze bloquea cualquier modificacion al objeto
Object.freeze(producto)

//Validar si esta congelado(bloqueado a cambios)
console.log(Object.isFrozen(producto))