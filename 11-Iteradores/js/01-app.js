// for (let i = 0; i < 20; i++) {
//     console.log(`Numero: ${i}`);
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`PAR: ${i}`)
//     }else{
//         console.log(`IMPAR: ${i}`)
//     }
    
// }

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

console.log(carrito[0].nombre)

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre, carrito[i].precio);
    
}