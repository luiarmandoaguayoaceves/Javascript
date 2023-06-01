//Este escuchador o evento sirve para saver si el usuario esta viendo tu pagina o se fue a otra para detener video o recursos
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Estas viendo el video');
    } else {
        console.log('No estas viendo el video y lo voy a detener...');
    }
})