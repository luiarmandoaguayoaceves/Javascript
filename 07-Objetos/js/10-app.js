const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true
}
const medidas = {
    peso: '1kg',
    medida: '1cm'
}

console.log(medidas);
console.log(producto);

const resultado = Object.assign(producto,medidas);
console.log(resultado);

const resultado2  = {...producto, ...medidas};
console.log(resultado2);
