const criptoMonedaSelect = document.querySelector('#criptomonedas');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const inputMoneda = document.querySelector('#moneda');
const inputCriptomonedas = document.querySelector('#criptomonedas');
const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};


//Crear un promise para la lectura del top de las 10 cripto mas usadas de eta manera si funciona la Api la muestra es una validacion

const obtenerCriptomonedas = criptomonedas => new Promise ( resolve => {
    resolve(criptomonedas);
})

window.onload = () =>{
    consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario);
    inputMoneda.addEventListener('change', leerValor);
    inputCriptomonedas.addEventListener('change', leerValor);

}

async function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomoneda(criptomonedas)
    } catch (error) {
        console.log(error);
    }
}

function selectCriptomoneda(criptomonedas) {
 criptomonedas.forEach(cripto => {
    
    const  {FullName, Name} = cripto.CoinInfo;
    const option = document.createElement('OPTION');
    option.value = Name;
    option.textContent = FullName;
    criptoMonedaSelect.appendChild(option);
 });
}

function leerValor (e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();
    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === "" || criptomoneda === ""){
        mostrarAlerta('Debes seleccionar una moneda y una criptomoneda');
        return;
    }

    consultarAPI();
}

function mostrarAlerta (mensaje) {
    const existeError = document.querySelector('.error');
    if(!existeError){
        const divAlerta = document.createElement('DIV');
        divAlerta.classList.add('error');
        divAlerta.textContent = mensaje
        formulario.appendChild(divAlerta);
        setTimeout( () => {
            divAlerta.remove();
        }, 1500)
    }
}

async function consultarAPI () {
    const { criptomoneda, moneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpinner();

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        mostrarCotizacionHTML(resultado.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error);
    }
    
    
}

function mostrarCotizacionHTML (respuesta){
    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = respuesta;


    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>Precio mas alto del dia: <span>${HIGHDAY}</span> &#9650;</p>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>Precio mas bajo del dia: <span>${LOWDAY}</span> &#9660;</p>`;

    const precio24Horas = document.createElement('P');
    precio24Horas.innerHTML = `<p>Precio en las ultimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `<p>Actualizado hace...  <span>${LASTUPDATE}</span></p>`;

    resultado.appendChild(precio)
    resultado.appendChild(precioAlto)
    resultado.appendChild(precioBajo)
    resultado.appendChild(precio24Horas)
    resultado.appendChild(ultimaActualizacion)
}

function limpiarHTML () {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function mostrarSpinner () {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}