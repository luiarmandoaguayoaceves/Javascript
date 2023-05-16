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

//Todos cumplen con la condicion es true su uno falla es false es el and a todo el array
const resultado = carrito.every( producto => producto.precio > 400);
console.log(resultado);

//Con que uno cumpla es true
const resultado2 = carrito.some( producto => producto.precio > 1000);
console.log(resultado2)