function suma (a, b) {
    return a + b;
}

let resultado = suma(4, 2);
let esperado = 3;




function resta (a, b) {
    return a - b;
}

async function sumaAsync (a, b) {
    return Promise.resolve(suma(a, b));
}

resultado = resta(10, 5);
esperado = 5;

expeced(esperado).toBe(resultado)
expeced(esperado).toEqual(resultado)

test('', () => {
    
})

async function test (mensaje, callback){
    try {
        await callback();
        console.log(`El test ${mensaje} se ejecuto correctamente`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

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