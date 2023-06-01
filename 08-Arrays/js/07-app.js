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

const producto4 = {
    nombre: 'Mouse',
    precio: 550
};

const producto5 = {
    nombre: 'Mochila',
    precio: 1200
};

const producto6 = {
    nombre: 'Termo',
    precio: 260
};

const producto7 = {
    nombre: 'Gabinete',
    precio: 2560
};

productos.push(producto);
productos.push(producto2);
productos.unshift(producto3);
productos.unshift(producto4);
productos.unshift(producto5);
productos.unshift(producto6);
productos.unshift(producto7);


console.table(productos);


//Eliminar final
productos.pop();
console.table(productos)

//Eliminar inicio
productos.shift(productos)
console.table(productos);

//Eliminar la posicion que elijamos y cantidad que elijamos
productos.splice(2, 1)
console.table(productos);