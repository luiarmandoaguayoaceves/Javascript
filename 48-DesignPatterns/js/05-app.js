// Module Pattern
/*
//! Version anterior

const modulo1 = (function() {
    const nombre = 'Luis Armando';

    function hola () {
        console.log('Hola Mundo');
    }

    return {
        nombre,
        hola
    }
})();

//? Se manda a llamar en otro archivo misma ruta 
modulo1.hola();
console.log(modulo1.nombre);

*/

//! Version actual ES6
const mostrarCliente = nombre => {
    console.log(nombre);
}

export default mostrarCliente;


//? Se manda a llamar desde otro archivo ->

// import {mostrarCliente} from '05-app.js'