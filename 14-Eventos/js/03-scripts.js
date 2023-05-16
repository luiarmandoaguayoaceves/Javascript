const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', (e) =>{
    console.log('undes la tecla');
});

busqueda.addEventListener('keyup', (e) =>{
    console.log('sueltas tecla');

});

busqueda.addEventListener('blur', (e) =>{
    console.log('cuando salgas del input');

});

busqueda.addEventListener('copy', (e) =>{
    console.log('Cuando copeas el texto');

});

busqueda.addEventListener('paste', (e) =>{
    console.log('Cuando pegas');

});

busqueda.addEventListener('cut', (e) =>{
    console.log('Cuando cortas');

});

busqueda.addEventListener('input', (e) =>{
    console.log('Cualquier cosa que hagas menos salir del input');
    console.log(e.target.value);
    console.log(e.target);
    console.log(e);
    /*VALIDANDO CAMPO QUE NO ESTE VACIO */
    if(e.target.value === ''){
        console.log('Campo vacio');
    }
});