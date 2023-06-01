const producto = '      Monitor de 40 pulgadas       ';
console.log(producto);
console.log(producto.length);

//Elimina espacio primero
console.log(producto.trimStart());
//Elimina espacio al final
console.log(producto.trimEnd());
//Eliminar espacios ambos sentidos
console.log(producto.trimStart().trimEnd());
//Eliminar ambos sentidos
console.log(producto.trim())