
//Construcytores 

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
    /*
    1.- Americano * 1.15
    2.- Asiatico * 1.05
    3.- Europeo * 1.35
    */

    const base = 2000;
    let cantidad;


    switch(this.marca){
        case '1':
            cantidad = base * 1.15
        break;
        case '2':
            cantidad = base * 1.05
        break;
        case '3':
            cantidad = base * 1.35
        break;
        default:
            break;
    }
    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia*3)*cantidad)/100

    /*
    Si el seguro es basico el costo aumenta un 30%   
    Si el seguro es completo el costo aumenta un 50%   
    */
   if(this.tipo === 'basico'){
        cantidad*=1.30
    }else{
        cantidad*=1.50
    }
    return cantidad;
}

function UI(){}

//Prototypes...
UI.prototype.Opcion = () =>{
    const max = new Date().getFullYear();
    let min = max - 20

    const selectYear = document.querySelector('#year');

    for (let i = max; i >= min; i--) {
        const option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option)
    }
};



UI.prototype.mostrarMensaje = (mensaje, tipo) =>{
    const div = document.createElement('DIV')
    if (tipo == 'error') {
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    }
        div.classList.add('mensaje', 'mt-10')
        div.textContent = mensaje
        
        const formulario = document.querySelector('#cotizar-seguro')
        formulario.insertBefore(div, document.querySelector('#resultado'))

    setTimeout(() => {
        div.remove();
    }, 3000);
} 

UI.prototype.mostrarResultados = (seguro, total) =>{

    const {marca, year, tipo} = seguro;
    let textoMarca;

    switch(marca){
        case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;
        case '3':
            textoMarca = 'Europeo'
            break;
        default:
            break;
    }

    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
    <p class="header"> Tu Resumen</p> 
    <p class="font-bold"> Marca: <span class="font-normal">${textoMarca}</span></p> 
    <p class="font-bold"> Año: <span class="font-normal">${year}</span></p> 
    <p class="font-bold"> Tipo: <span class="font-normal capitalize">${tipo}</span></p> 
    <p class="font-bold"> Total: <span class="font-normal">$ ${total}</span></p> 
    `
    const resultadoDiv = document.querySelector('#resultado');

    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block'

    setTimeout(() => {
        spinner.style.display = 'none' //Borro spinner 
        resultadoDiv.appendChild(div);// se muestra la cotizacion

    }, 3000);
}

//Instancias
const ui = new UI()


//Cargar las instancias
document.addEventListener('DOMContentLoaded', () =>{
    ui.Opcion();
})

eventListener();
function eventListener(){
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro (e){
    e.preventDefault();

    //Leer la marca seleccionada 
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer la cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Agregar datos correspondientes', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando.....', 'correcto');

    //Ocultar Cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }

    //instancias seguro
    const seguro = new Seguro(marca, year, tipo)
    const  total = seguro.cotizarSeguro();

    //Utilizar prototype del seguro 
    ui.mostrarResultados(seguro, total);
}