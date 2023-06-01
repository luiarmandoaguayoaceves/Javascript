//Funcion para iterar que retorna una funcion 
function iterador(carrito ) {
    let i = 0;
    return{
        siguiente: () => {
            //tamaño del arreglo validar 
            const fin = (i >= carrito.length)
            //Condicion 
            const valor = !fin ? carrito[i++] : undefined ;

            //Retornar el valor y la condicion 
            return{
                fin,
                valor
            }
        }

    }
}

//Arreglo
const carrito = ['Producto1', 'Producto2', 'Producto3' ];

//llamar al iterador
const recorrerCarrito = iterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());