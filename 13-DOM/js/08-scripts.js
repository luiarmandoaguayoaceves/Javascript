const navegacion =  document.querySelector('nav');

// console.log(navegacion);

// console.log(navegacion.firstElementChild);
// console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes);//Espacios en blanco considerados como elementos
// console.log(navegacion.children);//Solo los valores necesarios

// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector('.card')
// card.children[1].children[1].textContent = 'Nuevo headin desde traversing the DOM' 

// card.children[0].src = 'img/hacer2.jpg' ;
// console.log(card.children[0]);


// //Traversing de hijo a padre
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);