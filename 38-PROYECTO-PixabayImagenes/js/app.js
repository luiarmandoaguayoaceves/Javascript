const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacion = document.querySelector('#paginacion');
const registrosPorPagina = 25;
let totalPaginas;
let iterador;
let paginaActual = 1;

//Esto es lo mismo que DOMLoad para cargar todo el HTML primero
window.onload = () => {
    formulario.addEventListener( 'submit', validarFormulario);
}

function validarFormulario (e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;
    if(terminoBusqueda === ''){
        mostrarAlerta('Agregar un termino de busqueda');
        return;
    }

    buscarImagenes()
}

function mostrarAlerta(mensaje){
    const existeAlerta = document.querySelector('.bg-red-100');
    if(!existeAlerta){
        const alerta = document.createElement('p')
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>`
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes (){
    const termino = document.querySelector('#termino').value;
    const key = '37053653-c648568934747c4e7d024ac97'
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&${registrosPorPagina}&page=${paginaActual}`
    fetch(url)
        .then (respuesta => respuesta.json())
        .then (resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);
            console.log(resultado.totalHits);
            mostrarImagenes(resultado.hits)})
}

//Generador que va a resgistrar la cantidad de elementos deacuerdo a las paginas
function *crearPaginador (total) {
    for(let i = 1; i <= total; i++){
        yield i;

    }
}


function calcularPaginas (total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarImagenes (imagenes) {

    limpiarHTML();
    
    imagenes.forEach(imagen => {
        const {previewURL, likes, views, largeImageURL} = imagen;
        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 md-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">
                
                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light"> Me Gusta</span></p>
                    <p class="font-bold">${views} <span class="font-light"> Veces Vista</span></p>

                    <a
                        class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase fond-bold text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                    >
                        Ver Imagen
                    </a>
                </div>
            </div>
        </div>
        `
        
    });
    while(paginacion.firstChild){
        paginacion.removeChild(paginacion.firstChild);
    }
    imprimirPaginador();
}

function imprimirPaginador () {
    iterador = crearPaginador(totalPaginas);

    while(true){
        const {value, done} = iterador.next();
        if(done) return;

        //Caso contrario, generar un boton por cada elemento  en el generador
        const boton = document.createElement('A');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded')
        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes(value);
        }
        paginacion.appendChild(boton);
    }
}

function limpiarHTML () {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);

    }
}