const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

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

meses.forEach( mes => {
    if(mes === 'Febrero'){
        console.log('Si existe febrero');
    }
});

const respuesta1 = meses.includes('Marzo')
console.log(respuesta1);

const respuesta2 = carrito.some( producto => producto.nombre === 'Televisor')
console.log(respuesta2);

const respuesta3 = meses.some( mes2 => mes2 === 'Enero')
console.log(respuesta3);