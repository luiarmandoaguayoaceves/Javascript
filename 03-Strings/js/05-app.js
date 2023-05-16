const producto = 'Monitor de 40 pulgadas';

//replace para remplazar 
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//slice para recortar cadena
console.log(producto.slice(0, 13));
console.log(producto.slice(13));
console.log(producto.slice(3, 2));

//subString para recortar cadenas diferencia que si pones el valor inicial como mayor que el segundo los invierte para imprimir algo
console.log(producto.substring(0, 13));
console.log(producto.substring(13));
console.log(producto.substring(3, 2));

// CharAt recorta el caracter en x posicion usado como en google para tu foto de perfil cuando no tienes pone tu inicial
const nombre = 'Luis'
console.log(nombre.charAt(0));