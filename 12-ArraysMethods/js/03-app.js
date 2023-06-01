const valores = [5,10,15];

const carrito = [
    {nombre: 'Televisor', precio: 5000, },
    {nombre: 'Tablet', precio: 3500, },
    {nombre: 'Celular', precio: 5500, },
    {nombre: 'Smart Watch', precio: 7000, },
    {nombre: 'Auto', precio: 50000, },
    {nombre: 'Moto', precio: 45000, },
    {nombre: 'Bus', precio: 500, },
    {nombre: 'Viaje', precio: 10000, },
    {nombre: 'Vacaciones', precio: 20000, }
]

//Total con un forEach
let total = 0;
carrito.forEach( producto => total += producto.precio)
console.log(total)

let pagar = carrito.reduce( (neto, producto) => neto + producto.precio, 0)
console.log(pagar)

let suma = valores.reduce( (neto, valor) => neto + valor, 0)
console.log(suma)