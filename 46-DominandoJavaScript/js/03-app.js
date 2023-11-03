const numero1 = 20;
const numero2 = "20";

console.log(numero1 + numero2);//Implicita

console.log(Number(numero2));//Explicita

console.log(numero1.toString());

const array = [1, 2, 3, 4];
console.log(array.toString());
console.log(JSON.stringify(array));