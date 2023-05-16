const cardDIV = document.querySelector('.card');

cardDIV.addEventListener('click', e =>{
    if(e.target.classList.contains('card')){
        console.log('Click en Card')
    } 
    if(e.target.classList.contains('titulo')){
        console.log('Click en Titulo')
    } 
    if(e.target.classList.contains('precio')){
        console.log('Click en Precio')
    } 
})