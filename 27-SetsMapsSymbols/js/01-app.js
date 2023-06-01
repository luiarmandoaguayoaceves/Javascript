/* El metodo Set nos ayuda a generar un arreglo de datos pero sin valores repetidos mas rapido y eficiente */
const carrito = new Set()

//Agregas datos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa');
carrito.add('camisa');

//Longitud del arreglo
console.log(carrito.size);

//Buscar un dato en el arrreglo
console.log(carrito.has('Disco #2'));

//Eliminar un dato del arreglo
carrito.delete('Disco #3');

//Limpiar todo el carrito
carrito.clear()


/*Para explicar esta parte es para ver que el nombre del valor es el mismo que el valor ej: {nombre: nombre, edad: edad}  etc. y como es un arreglo entonces imprime el tamaño del arreglo todos los arreglos si hay 5, 5 arreglos de 5 */
carrito.forEach( (producto, index, peretenece) =>{
    console.log(producto);
    console.log(index);
    console.log(peretenece);
})


console.log(carrito);


//Ejemplo del uso comun solo imprime 1 de cada valor sin repetir
const numeros = [10, 20, 30, 40, 10, 20]
const numerosSinRepetir = new Set(numeros)
console.log(numerosSinRepetir);