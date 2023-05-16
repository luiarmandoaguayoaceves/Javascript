//El metodo this permite a tomar las bariables del mismo objeto de otra maneta tendranque ponerlas de manera global y modificar sus valores


const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true,
    masInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto2 = {
    nombre: 'Tablet',
    precio: 3000,
    disponible: true,
    masInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}


//Se manda a llamar como el nombre de la variable y la funcion.
producto.masInfo();
producto2.masInfo();