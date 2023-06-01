/* weakMap Solo aceptan objetos nada de string ni numeros, no se puede iterar y tampoco conocer su longitud  No foreach ni Size*/

const producto = {
    idObjeto: 10
}
const producto2 = {
    idObjeto2: 20
}

const weakMap = new WeakMap();

//Lo agrega pero aparece como no definido 
weakMap.set(producto);

//Le agrega un idntificador
weakMap.set(producto, 'monitor');

//Se agrega otro dato pero el identificador sale como no definido
weakMap.set(producto2);

//Buscar si existe
console.log(weakMap.has(producto));

//Busca el producto y regresa el identificador
console.log(weakMap.get(producto));
console.log(weakMap.get(producto2));

//Eliminamos el producto
console.log(weakMap.delete(producto2));



console.log(weakMap);