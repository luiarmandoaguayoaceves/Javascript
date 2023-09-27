//como funcionan los promises
const resultado = new Promise ( (resolve, reject) => {
    //variable boleana
    const validar = false;

    if(validar) {
        //si es verdadero o si cumple
        resolve('Todo bien');
    } else {
        //si no cumple pasara esto
        reject('Algo salio mal');
    }
})

//llamamos la variable de promise y le pasamos que haga mediante un parametro a la funcion then o catch
resultado
.then (resultado => {
    //imprimiendo
    console.log(resultado);
})
.catch( error => {
    //llamando una funcion
    alerta(error);
})


//funcion para el catch como otra alternativa se puede llamar metodos no tiene que ser a uerza todo el codigo en ese apartado
function alerta(mensaje) {
    console.log(mensaje);
}

//Hay tres posibles valores como respuesta
//1ro fullfilled - El promise se cumplio
//2do rejected - El promise no se cumplio
//3ro pending - No e ha cumplido y tampoco fue rechazado