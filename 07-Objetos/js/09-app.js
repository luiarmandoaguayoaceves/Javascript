"use strict"
const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true
}

//este metodo permite modificar pero no agregar ni eliminar datos dentro del objeto
Object.seal(producto);
producto.disponible = false;

console.log(producto);

//Validar si el objeto esta bajo el metodo seal
console.log(Object.isSealed(producto));