//Objetc literal
const producto = {
    nombre: 'Monitor curvo 20"',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1cm'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

console.log(producto.informacion.fabricacion.pais);
console.log(producto);