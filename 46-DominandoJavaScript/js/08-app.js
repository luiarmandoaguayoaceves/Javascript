//self

self.onload = () => {
    console.log('Ventana lista');
}


// window.onload = () => {
//     console.log('Ventana lista');
// }

window.nombre =  'Monitor 20 Pulgadas';

const producto = {
    // nombre: 'Monitor 20 Pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){

        // return `El producto ${this.nombre} tiene un precio de ${this.precio}`
        // const self = this;
        // return `El producto ${self.nombre} tiene un precio de ${self.precio}`
        
        return `El producto ${self.nombre}`
    }
}

console.log(producto.mostrarInfo());