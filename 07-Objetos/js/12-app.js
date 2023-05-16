//Objetc literal
const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true,
    masInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

//Object Constructor}

function productoConstructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto1 = new productoConstructor('Monitor de 20"', 5000);
console.log(producto1);

const producto2 = new productoConstructor('Tablet', 2000);
console.log(producto2);