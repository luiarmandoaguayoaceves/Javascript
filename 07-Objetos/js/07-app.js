//como restrinjir el hecho que se modifiquen los valores de un objeto 
const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true
}

delete producto.precio;
producto.disponible = false

console.log(producto)