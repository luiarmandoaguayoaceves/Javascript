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

//Filtrar resultados

let resultado = carrito.filter( producto => producto.precio > 400);
resultado = carrito.filter ( producto => producto.precio < 2000)
resultado = carrito.filter ( producto => producto.nombre !== 'Smart Watch')
resultado = carrito.filter ( producto => producto.nombre === 'Smart Watch')


console.log(resultado)