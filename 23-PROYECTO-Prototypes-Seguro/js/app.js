
//Construcytores 

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function (marca, year, tipo) {
    /*
    1.- Americano * 1.15
    2.- Asiatico * 1.05
    3.- Europeo * 1.35
    */

    const base = 2000;
    let cantidad;


    switch(marca){
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
    const diferencia = new Date().getFullYear() - year;
    cantidad -= ((diferencia*3)*cantidad)/100

    /*
    Si el seguro es basico el costo aumenta un 30%   
    Si el seguro es completo el costo aumenta un 50%   
    */
   if(tipo === 'basico'){
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

    //instancias seguro
    const seguro = new Seguro(marca, year, tipo)
    seguro.cotizarSeguro(marca, year, tipo);
    //Utilizar prototype del seguro 
}