//Variable por id
const btnNotificacion = document.querySelector('#notificar');

//Promisepara pedir permiso
btnNotificacion.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log(`La respuesta a la peticion es... ${resultado}`);
        })
})

//variable y validacion para las acciones que hara el button ademas de que tienes que entrar a notificacion y permisos para que se ejecuten
const lansarNotificacion = document.querySelector('#verNotificacion');
lansarNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        /*
        new Notification ('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'Practicando con juan'
        })
        */


        //lo crear como objeto y le pasas un mensaje como primer parametro y segundo el cuerpo y un icono ademas de redirrecion a una pagina

        const notificacion = new Notification ('Esta es la notificacion', {
            icon: 'img/logo.png',
            body: 'Dame click y te llevo a google'
        })
        //Abrir nueva ventana desde la notificacion
        notificacion.onclick = () => {
            window.open('https://www.google.com/')
            }
    }
})