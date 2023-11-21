function suma (a, b) {
    return a + b;
}

let resultado = suma(4, 2);
let esperado = 3;


expeced(esperado).toBe(resultado)
expeced(esperado).toEqual(resultado)

function resta (a, b) {
    return a - b;
}

resultado = resta(10, 5);
esperado = 5;


function expeced (esperado) {
    return{
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El resultado ${resultado} no es el esperado. Error`);
            }else {
                console.log('Prueba pasada con exito');
            }
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El resultado ${resultado} no es el esperado2. Error`);
            }else {
                console.log('Prueba pasada con exito2');
            }
        }
    }
}