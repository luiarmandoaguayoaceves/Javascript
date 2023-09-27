//Variable declacarion
const paises = [];

//funciones 
//1era funcion se agrega un pais al arreglo y se llama una funcion como parametros
function agregarPais(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 500);
}

//se imprime el arreglo
function mostrarPais(){
    console.log(paises);
}

//se llama la funcion pasando parametro un pais nuevo y un metodo
function iniciarCallBackHell(){
    setTimeout(() => {
        agregarPais('Alemania', mostrarPais)
        setTimeout(() => {
            agregarPais('Francia', mostrarPais);
            setTimeout(() => {
                agregarPais('Inglaterra', mostrarPais);
            }, 500);
        }, 500);
    }, 500);
}

//Se manda a llamar la funcion 
iniciarCallBackHell();