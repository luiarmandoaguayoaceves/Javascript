const numero1 = 20;
const numero2 = '20';
const numero3 = 30;

//numero 1 es igual a numero dos indepoendientemente si es del mismo tipo de dato
console.log(numero1 == numero2);
console.log(numero1 == numero3);

//el numero 1 y 2 es igua incluso el mismo tipo numero o caracteres
console.log(numero1 === numero2);
console.log(numero1 === numero2);
console.log(numero1 == parseInt(numero2));

//Diferente de 
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2, 'diferentes por Mayus');
console.log(numero1 != numero2, 'Ambos son 20 uno texto y otro numerico pero ambos son iguales');
console.log(numero1 !== numero2, "Son diferentes por que uno es texto y otro valor numerico");
console.log(numero1 !== numero3);
