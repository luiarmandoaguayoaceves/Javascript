const carrito = {
    nombre: 'Televisor', 
    precio: 5000, 
}
// for (let producto in carrito){
//     console.log(carrito[producto].nombre, carrito[producto].precio);
// }

for(let [llave, valor] of Object.entries(carrito)){
    console.log(llave);
    console.log(valor);
}