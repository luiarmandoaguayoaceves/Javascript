//ejecuta este no importa que primero se mande a llamar la funcion despues se crea
sumar(5,3);
function sumar(num1, num2){
    console.log( num1 + num2);
}
//esta no se ejecutara por que es una constante que almacena un funcion por lo tanto no la reconoce como funcion a primer recorrido
sumar2(8,6);
const sumar2 = function(num1, num2){
    console.log(num1 + num2);
}