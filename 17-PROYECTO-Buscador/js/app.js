//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const mostrar = document.querySelector('#resultado');
const max = new Date().getFullYear();//Tomar el año del equipo 
const min = max-10;
const filtrado = {
    marca: '',
    year: '',
    min: '',
    max: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos)//Agregamos los autos
    llenarSelectYears()//Agregamos los años al campo select
});

//Escuchador de eventos
marca.addEventListener('change', e =>{
    filtrado.marca = e.target.value;
    filtrarAuto()
});

year.addEventListener('change', e =>{
    filtrado.year = parseInt(e.target.value);
    filtrarAuto()

});

precioMin.addEventListener('change', e =>{
    filtrado.min = e.target.value;
    filtrarAuto()
});

precioMax.addEventListener('change', e =>{
    filtrado.max = e.target.value;
    filtrarAuto()
});

puertas.addEventListener('change', e =>{
    filtrado.puertas = parseInt(e.target.value);
    filtrarAuto()
});

transmision.addEventListener('change', e =>{
    filtrado.transmision = e.target.value;
    filtrarAuto()
});

color.addEventListener('change', e =>{
    filtrado.color = e.target.value;
    filtrarAuto()
});



//Funciones
function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach( auto =>{
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision}
            Precio: ${precio}  - Color: ${color}
        `;
        mostrar.appendChild(autoHTML);

    });
};

function limpiarHTML(){
    while(mostrar.firstChild){
        mostrar.removeChild(mostrar.firstChild)
    }
}

function llenarSelectYears(){
    for (let i = max; i >= min; i--) {//inicia en el valor max: mientras i sea mayor/igual al valor min continua: iterando -1
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.append(opcion);
    }
}

function filtrarAuto(){
    const busqueda = autos.filter(filtradoMarca).filter(filtradoYear).filter(precioMinimo).filter(precioMaximo).filter(numPuertas).filter(autoTransmision).filter(colorAuto)

    if (busqueda.length ) {
        mostrarAutos(busqueda);
    }else{
        noResultados();
    }

}

function noResultados(){
    limpiarHTML();
    const noResultados = document.createElement('DIV');
    noResultados.classList.add('alerta', 'error');
    noResultados.textContent = 'No se encontraron resultados intenta con otros parametros'
    mostrar.appendChild(noResultados);
}

function filtradoMarca(auto){
    if(filtrado.marca){
        return auto.marca === filtrado.marca;
    }
    return auto;
}

function filtradoYear(auto){
    if(filtrado.year){
        return auto.year === filtrado.year;
    }
    return auto;
}

function precioMinimo(auto){
    if(filtrado.min){
        return auto.precio >= filtrado.min;
    }
    return auto;
}

function precioMaximo(auto){
    if(filtrado.max){
        return auto.precio <= filtrado.max;
    }
    return auto;
}
function numPuertas(auto){
    if(filtrado.puertas){
        return auto.puertas === filtrado.puertas;
    }
    return auto;
}

function autoTransmision(auto){
    if(filtrado.transmision){
        return auto.transmision === filtrado.transmision;
    }
    return auto;
}

function colorAuto(auto){
    if(filtrado.color){
        return auto.color === filtrado.color;
    }
    return auto;
}