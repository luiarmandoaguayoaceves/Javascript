//Botones que hacen pantalla completa y salen
//tomamos los botones por su id
const pantallaCompleta = document.querySelector('#abrir-pantalla-completa');
const saliPantallaCompleta = document.querySelector('#salir-pantalla-completa');

//Creamos eventos 
pantallaCompleta.addEventListener('click', entrarPantallaCompleta);
saliPantallaCompleta.addEventListener('click', salirPantallaCompleta);

//funciones con metodo para fullscreen
function entrarPantallaCompleta() {
    document.documentElement.requestFullscreen();
}


//funcion para salir de pantalla completa
function salirPantallaCompleta() {
    document.exitFullscreen();
}