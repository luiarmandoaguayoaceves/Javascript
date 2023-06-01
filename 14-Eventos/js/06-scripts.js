const cardDIV = document.querySelector('.card');
const cardINFO = document.querySelector('.info');
const titulos = document.querySelector('.titulo');

cardDIV.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en Card')
});

cardINFO.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Click en Info')
});

titulos.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Click en Titulo')
});