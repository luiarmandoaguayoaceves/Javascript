//Variables
const formulario = document.querySelector('#formulario');
const agregarTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Events Listener
eventos()
function eventos(){
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweet')) || [];
        agregarHTML();
    })
}



//Funciones
function agregarTweet(e){
    e.preventDefault();
    //Tomar el valor del text area y almacenarlo
    const tweetNuevo = document.querySelector('#tweet').value

    //Validar que agrego un dato a el text area
    if (tweetNuevo) {
        const tweetObj = {
            id: Date.now(),
            tweetNuevo
        }
    
        tweets = [...tweets, tweetObj]
        console.log(tweets);
        agregarHTML();
        formulario.reset();
        sincronizarLocarStorage();
        return
    }
    mostrarError('Agrega un texto al tweet');
}

function sincronizarLocarStorage(){
    localStorage.setItem('tweet', JSON.stringify(tweets))
}

function mostrarError(mensaje){
    //Creamos un parrafo y se lo agregamos despues del contenido por 3 segundos si no hay datos
    const error = document.createElement('P');
    error.textContent=`${mensaje}`;
    error.classList.add('error');

    //Variable local para posicionarnos en el contenido
    const constenido = document.querySelector('#contenido');

    //agregar el parrafo despues del contenido
    constenido.appendChild(error);

    //tiempo para eliminar el parrafo de 3 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}

function agregarHTML(){
    eliminarHTML()
    if (tweets.length > 0) {
        tweets.forEach(tweet =>{
            const elimiar = document.createElement('a');
            elimiar.classList.add('borrar-tweet');
            elimiar.textContent='X';
            elimiar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('Li');
            li.textContent = `${tweet.tweetNuevo}`;

            agregarTweets.appendChild(elimiar);
            agregarTweets.appendChild(li);
        });
    }
    sincronizarLocarStorage();
}

function eliminarHTML(){
    while(agregarTweets.firstChild){
        agregarTweets.removeChild(agregarTweets.firstChild)
    }
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    console.log(tweets);
    agregarHTML();
}