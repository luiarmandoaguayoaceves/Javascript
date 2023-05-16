const productos = [];
const producto = {
    nombre: 'Pantalla HD',
    precio: 5000
};

const producto2 = {
    nombre: 'Celular',
    precio: 4000
};

const producto3 = {
    nombre: 'Teclado',
    precio: 500
};

carrito = [...productos, producto, producto2, producto3];
carrito = [producto3, producto2, producto, ...carrito];

console.table(carrito);