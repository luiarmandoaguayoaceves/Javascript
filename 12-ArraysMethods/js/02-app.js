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

//Encontrar indice de Abril con Array 
meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
        console.log(`El mes de ${mes} esta en el indice ${i}`)
    }
})

//Encontrar el indice de Abril de un array con Arrow Function
const respuesta1 = meses.findIndex( mes => mes === 'Abril');
console.log(respuesta1)


//Encontrar indice de un array de objetos solo retorna el primer valor que encuentra que cumple la condicion
const respuesta2 = carrito.findIndex (producto => producto.nombre === 'Smart Watch');
console.log(respuesta2);