//Funciones puras o pure functions
//Dejar los valores originales intactos y almacenar en nuevas variables el resultado de ellos 
const valor1 = 20
const duplicar = numero => numero *2;

const resultado = duplicar(valor1);
console.log(resultado);
console.log(valor1);