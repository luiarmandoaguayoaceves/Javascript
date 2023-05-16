const nav = document.querySelector('.navegacion');


nav.addEventListener('mousedown',()=>{
    console.log('Precionastes el boton');
    nav.style.backgroundColor = 'blue';
});

nav.addEventListener('mouseup',()=>{
    console.log('Soltaste el boton');
    nav.style.backgroundColor = 'black';
});

nav.addEventListener('click',()=>{
    console.log('hiciste click');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick',()=>{
    console.log('Doble click');
    nav.style.backgroundColor = 'white';

});