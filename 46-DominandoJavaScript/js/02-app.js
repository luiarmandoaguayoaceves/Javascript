imprimirNombre('Luis Armando')

function imprimirNombre (nombre) {
    console.log(`Mi nombre es: ${nombre}`);
}

// imprimirEdad(27);    Aqui no funciona por que como lo toma como variable que almacena funcion no lo almacena en el navegador 
const imprimirEdad = function (edad) {
    console.log(edad);
}
imprimirEdad(27);
