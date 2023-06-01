const enlace = document.createElement('A');
enlace.textContent = 'Nuevo Enlace';
enlace.href = '#';

const navegacion = document.querySelector('.navegacion');
// console.log(navegacion)
// navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);

/************************************* 
        CREAMOS ETIQUETAS HTML 
        Y AGREGAMOS ATRIBUTOS
*********************************** */

const card = document.createElement('DIV');
card.classList.add('card');

const imagen = document.createElement('img');
imagen.src= 'img/hacer2.jpg';

const info = document.createElement('DIV');
info.classList.add('info');

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Musica Reggae 2010';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$2,000 por persona';
parrafo3.classList.add('precio');

/********************************************
        BUSCAMOS DONDE LO COLOCARIAMOS
 *******************************************/
const hacer = document.querySelector('.hacer .contenedor-cards');

/********************************************
        AGREGAMOS CADA ETIQUETA 
        A SU LUGAR CORRESPONDIENTE 
 *******************************************/

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

card.appendChild(imagen);
card.appendChild(info);

/********************************************
        LA COLOCAMOS EN LA PAGINA
        EN UN LUGAR ESPECIFICO
 *******************************************/

hacer.insertBefore(card, hacer.children[1]);
