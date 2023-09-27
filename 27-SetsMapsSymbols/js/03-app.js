/* Map este sirve para crear arreglos de arreglos sin importar el tipo de dato o el nombre del valor y tienen mucho mejor performance */

const arreglo = new Map()

//Agregamos datos elijiendo el nombre de la key y el valor sin importar el tipo de key como se muestra
arreglo.set('nombre', 'Armando');
arreglo.set('tipo', 'Premium');
arreglo.set('saldo', 5000);
arreglo.set([0], 50);
arreglo.set(50, 'Alto');

//Buscar si existe el dato
console.log(arreglo.has('tipo'));

//Longitud de la variable o datos
console.log(arreglo.size);

//Tomamos el dato de la key buscada
console.log(arreglo.get('nombre'));

//Eliminar
arreglo.delete('tipo');

console.log(arreglo);


const arreglo2 = new Map([['escuela', 'Real'], ['Materia', 'Matematicas']]);

//Cambiar variables existente
arreglo2.set('escuela', 'San Martin');

//Agregar otro dato extra
arreglo2.set('codigoAlumno', 20110403);

console.log(arreglo2);

//Itera sobre el arreglo e imprime valores
arreglo2.forEach( dato => {
    console.log(dato);
})

