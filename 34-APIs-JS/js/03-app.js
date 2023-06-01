//revisar si esta o no conectado a internet 
//revisamos la ventana si esta en modo off u on
window.addEventListener( 'online', actualizarEstado);
window.addEventListener( 'offline', actualizarEstado);

//ejecutamos la funcion al escuchar si esta en linea imprime y si no tambien imprime
function actualizarEstado (){
    if (navigator.onLine) {
        console.log('Estas conectado');
        } else {
            console.log('No estas conectado');
            }
            
}