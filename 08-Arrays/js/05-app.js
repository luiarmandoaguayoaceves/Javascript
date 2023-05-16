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

//Inserta al final
productos.push(producto);
productos.push(producto2);

//Inserta al inicio 
productos.unshift(producto3);

console.table(productos);