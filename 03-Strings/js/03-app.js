//concatenar strings

const producto = 'Monitor de 40 pulgadas ';
const precio = '4,800.00 M/N';

console.log(producto.concat(precio));
console.log(producto.concat('en descuento ahora en ').concat(precio));

console.log(producto + 'en descuentoahora en  ' + precio);
console.log(producto, 'en descuento ahora en ', precio);

console.log(`${producto} en descuento ahora en  $ ${precio}`);