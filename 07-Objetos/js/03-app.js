//Objetc literal
const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true
}

//Agregar propiedades 
producto.imagen = 'imagen.jpg';

//Eliminar propiedades

delete producto.disponible;

console.log(producto)