//Te permite tomar solo el primer valor que te aparece en el documento maximo es 1 minimo ninguno.

//class
const card = document.querySelector('.card');
console.log(card);

//especificidad de clase
const info = document.querySelector('.premium .info');
console.log(info);

//Segunda clase de una etiqueta
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Id de una clase 
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

//Etiqueta HTMl
const navegacion = document.querySelector('nav');
console.log(navegacion);