//Variable
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

//funcion para agregar un pais  
function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais)
        callback();
    }, 3000)
}

//ciclo forEach para imprimir los datos del areglo
function mostrarPaises(){
    setTimeout(() => {
        paises.forEach( pais =>{
            console.log(pais);
        })
    }, 1000);
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises);