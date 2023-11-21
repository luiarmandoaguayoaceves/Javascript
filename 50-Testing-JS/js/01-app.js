function suma (a, b) {
    return a + b;
}

let resultado = suma(4, 2);
let esperado = 3;

if(resultado !== esperado){
    console.error(`El resultado ${resultado} no es el esperado. Error`);
}else {
    console.log('Prueba pasada con exito');
}

function resta (a, b) {
    return a - b;
}

resultado = resta(10, 5);
esperado = 5;

if(resultado !== esperado){
    console.error(`El resultado ${resultado} no es el esperado. Error`);
}else {
    console.log('Prueba pasada con exito');
}