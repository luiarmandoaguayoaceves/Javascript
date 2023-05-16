// const encabezado = document.querySelector('h1');
// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';


//Agregarles clases
const card = document.querySelector('.card');
card.classList.add('primera-classe', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList)