const producto = 'Monitor de 40 pulgadas';

//repeat permite repetir el texto x cantidad de veces
const texto = 'Promocion de oferta'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto}`);

//split permite separar en un arreglo por el caracter que le pases por parametro
const actividades = 'cargar jugar correr bailar fumar';
console.log(actividades.split(' '));

const hobbies = 'boley, juegos, correr por el bosque, caminar, escuchar musica';
console.log(hobbies.split(','));

const tweet = 'Hola mi nombre es #programandoConArmando';
console.log(tweet.split('#'));