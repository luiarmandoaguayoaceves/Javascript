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

//Con forEach 
let resultado =  '';
carrito.forEach( (producto, i) => {
    if(producto.nombre === 'Smart Watch'){
        resultado = carrito[i];
    }
})
console.log(resultado);

const resultado2 = carrito.find(producto => producto.precio === 500);
console.log(resultado2)