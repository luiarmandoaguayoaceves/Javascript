const contenedor = document.querySelector('.container');
const resultado =  document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e){
    e.preventDefault();


    //Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        mostraraAlerta('Los datos estan vacios por favor llenar el formulario')
    }

    //Consultar la API
    consultarAPI(ciudad, pais);
}

function mostraraAlerta(mensaje){
    const alerta = document.querySelector('.alerta');
    if (!alerta) {
        const alerta = document.createElement('DIV');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounder', 'max.wd-md', 'mx-auto', 'mt-6', 'text-center', 'alerta');
        alerta.innerHTML =  `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
        `;
        contenedor.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function consultarAPI(ciudad, pais){
    const AppId = '443b245c5c7614de1a4c580cd1cd9d66'
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${AppId}`

    spinner();

    fetch(api)
    .then( resultado => resultado.json())
    .then ( clima => {
        console.log(clima);
        limpiarHTML()

        if(clima.cod === '404'){
            mostraraAlerta('La ciudad o pais no existe')
            return;
        }
        mostrarHTML(clima)
    })

}

function mostrarHTML(datos){
    const {name, main: {temp, temp_max, temp_min}} = datos


    const  centrigrados  = kelvinACentigrados(temp)
    const  max  = kelvinACentigrados(temp_max)
    const  min  = kelvinACentigrados(temp_min)
    
    const nombre = document.createElement('P');
    nombre.textContent = `Clima en ${name}`
    nombre.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('P');
    actual.innerHTML = `${centrigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMin = document.createElement('P');
    tempMin.innerHTML = `Min: ${min} &#8451;`;
    tempMin.classList.add('text-xl');

    const tempMax = document.createElement('P');
    tempMax.innerHTML = `Max: ${max} &#8451;`;
    tempMax.classList.add('text-xl');

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombre);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

function limpiarHTML(){
    while( resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

const kelvinACentigrados = temperatura =>  parseInt(temperatura - 273.15);


function spinner () {
    limpiarHTML();
    const spinner = document.createElement('DIV');
    spinner.classList.add('sk-fading-circle')
    spinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(spinner);
}
