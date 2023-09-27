//Este se llama Generador tambien te ayuda a iterar pero es mas corto que el iterador creado anterior
function *crearGenerador() {
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}


const iterador = crearGenerador();

// console.log(iterador.next());
// // console.log(iterador.next().value);
// // console.log(iterador.next().done);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());



//Iterador
function *crearGeneradorV2(productos){
    for (let i = 0; i < productos.length; i++) {
        yield productos[i];
        
    }
}

//Arreglo de productos
const productos = ['Prodicto1', 'Producto2', 'Producto3'];

//Almacenar gneradod en una variable 
const iteradorProducto = crearGeneradorV2(productos);

//imprimir por la variable llamando el metodo next
console.log(iteradorProducto.next());
console.log(iteradorProducto.next());
console.log(iteradorProducto.next());
console.log(iteradorProducto.next());