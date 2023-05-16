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

//Iterador
for (let i = 0; i < carrito.length; i++) {
    const {nombre, precio} = carrito[i];
    console.log(nombre, precio);   
}

//Iterador con menos lineas
carrito.forEach( function (producto){
    console.log(`${producto.nombre} precio: ${producto.precio}`)
})