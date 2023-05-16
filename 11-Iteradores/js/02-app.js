// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {

//         // console.log(`Este es el 5 y me detuve`);
//         // break;

//         console.log('CINCO')
//         continue;
//     }
//     console.log(`Numero ${i}`)
    
// }


const carrito = [
    {nombre: 'Televisor', precio: 5000, },
    {nombre: 'Tablet', precio: 3500, },
    {nombre: 'Celular', precio: 5500, },
    {nombre: 'Smart Watch', precio: 7000, descueto: true },
    {nombre: 'Auto', precio: 50000, },
    {nombre: 'Moto', precio: 45000, },
    {nombre: 'Bus', precio: 500, },
    {nombre: 'Viaje', precio: 10000, },
    {nombre: 'Vacaciones', precio: 20000, }
]

for(let i = 0; i <= carrito.length; i++){
    if(carrito[i].descueto){
        console.log(`El articulo ${carrito[i].nombre} tiene 20% de descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre}`)
}