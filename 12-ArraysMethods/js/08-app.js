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

//es la manera ideal ya que no modificamos el arreglo inicial
const resultado1 =  [...meses, 'Mayo'];
console.log(resultado1);

const resultado2 = [...carrito, {nombre: 'llave', precio: 50}];
console.log(resultado2);

console.log("se mantienen los valores originales por que los otros los clonamos en otro espacio de memoria y los modificamos")
console.log(meses);
console.log(carrito);