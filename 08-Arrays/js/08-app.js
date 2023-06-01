const articulo = {
    nombre: 'Pantalla de 20"',
    precio: 5600,
    disponible: true
}

const {nombre} = articulo;
console.log(nombre);

const arreglo = [10, 20, 30, 40, 50];

const [, , ,cuarto] = arreglo;
const [primero] = arreglo;
const [,segundo, ...tercero] = arreglo;
console.log(primero);
console.log(cuarto);
console.log(segundo);
console.log(tercero);