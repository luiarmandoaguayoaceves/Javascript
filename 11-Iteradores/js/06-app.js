const arreglo = ['HTML',  'JS', 'CSS', 'Node.JS'];

arreglo.forEach( lenguaje => {
    console.log(lenguaje)
})


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

// este no permite ser almacenado
carrito.forEach( producto => console.log(producto.nombre));
//Crea un arreglo nuevo lo cual si permite almacenarse enunavariable
carrito.map( producto => console.log(producto.precio))
