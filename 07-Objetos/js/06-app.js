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

//Drestructuring
const {nombre, informacion, informacion: {fabricacion, fabricacion:{pais}}} = producto
console.log(nombre)
console.log(informacion)
console.log(fabricacion)
console.log(pais)