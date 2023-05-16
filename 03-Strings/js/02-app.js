const dispositivo = 'Monitor de 20 pulgadas';

console.log(dispositivo);
//tamaño de la cadena
console.log(dispositivo.length);

//buscar palabra exacta y te da la posicion
console.log(dispositivo.indexOf('pulgadas'));
console.log(dispositivo.indexOf('Pulgadas'));

//te da valor booleano si lo encuentra o no
console.log(dispositivo.includes('pulgadas'));
console.log(dispositivo.includes('Pulgadas'));
