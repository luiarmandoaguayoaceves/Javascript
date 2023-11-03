const nombre = 'Luis Armando'

function imprimirNombre () {
    console.log( nombre);
}

imprimirNombre();

function imprimirEdad () {
    const edad = 27 ;
    return edad;
}

// console.log(edad);  No se puede imprimir edad aqui por que no alcanza a un valor dentro de una funcion de esta manera
const resultado =  imprimirEdad()// se tuene que hacer un return y almacenar en una variable 
console.log(resultado);//para despues poder imprimir