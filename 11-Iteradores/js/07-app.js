const herramientas = ['HTML',  'JS', 'CSS', 'Node.JS'];

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

for( let herramienta of herramientas){
    console.log(herramienta);
}

for(let producto of carrito){
    console.log(producto.nombre, producto.precio);
}