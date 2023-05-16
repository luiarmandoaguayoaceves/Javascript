const input = document.querySelector('#formulario');

input.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log('Buscando...');
    console.log('Sirve para buscar una api');
    console.log(e.target.action);
};