import { saveData, getData, getCampo, EliminarDato, updateCampo} from "./firebase.js";

const formulario = document.querySelector('#form')
const registros = document.querySelector('#container')
const aceptar = document.querySelector('#aceptar')
let fechaActual = new Date();
let estado;
let editStatus = false;
let alimentar;
let fecha;


window.addEventListener('DOMContentLoaded', getData);
formulario.addEventListener('submit', recolectarDatosFirebase)
aceptar.addEventListener('click', activarAhora)

function recolectarDatosFirebase (e){
    
    e.preventDefault();
    
    fecha = new Date(document.querySelector('#fecha').value);
    
    
    if(fechaActual > fecha){
        alimentar = false
        return;
    } else {
        alimentar = true;
    }

    if(editStatus){
        
    } else {
        saveData(alimentar, fecha)
    }
    formulario.reset();
    limpiarHTML();
};


    getData ( registro =>{
        limpiarHTML()
        registro.forEach(element => {
            let registro = document.createElement("div")
            let timestamp = element.data().fecha['seconds'];
            let fechaNva = new Date(timestamp*1000);
            let dia = fechaNva.getDate();
            let mes = fechaNva.getMonth() + 1; // Los meses van de 0 a 11 en JavaScript
            let anio = fechaNva.getFullYear();
            let hora = fechaNva.getHours();
            let minuto = fechaNva.getMinutes();
    
    
            //Tomar el id para hacer el cambio de estado si se cumple la condicion
            if(fechaActual <  fechaNva) {
                console.log('Manten su estado en true continua normal');
                
            } else {
                console.log('cambia de estado a false');
                
            }
    
            if(element.data().alimentar){
                estado = 'Pendiente para servir'
                registro.innerHTML = `<h3>Registro</h3>
                <p>Fecha: ${dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minuto}</p>
                <p>Estado: ${estado}</p>
                <button class="btn-update" data-id="${element.id}">Surtir</button>
                <button class="btn-delete" data-id="${element.id}">Eliminar</button>`;
            } else {
                estado = 'surtido'
                registro.innerHTML = `<h3>Registro</h3>
                <p>Fecha: ${dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minuto}</p>
                <p>Estado: ${estado}</p>
                <button class="btn-delete" data-id="${element.id}">Eliminar</button>`;
            }
            registros.appendChild(registro);
        });

        const btnUpdate = registros.querySelectorAll('.btn-update');
            btnUpdate.forEach ( btn => {
                btn.addEventListener ('click', async ({target: {dataset}}) =>{
                    const doc = await getCampo(dataset.id)
                    updateCampo(doc.id, {alimentar: false})

            })
        })
            const btnDelete = registros.querySelectorAll('.btn-delete');
            btnDelete.forEach (btn => {
                btn.addEventListener ('click', ({target: {dataset}}) =>{
                    EliminarDato(dataset.id)
                    
            })
        })
    });

function activarAhora (){
    alimentar = false;
    fecha = fechaActual;
    saveData(alimentar, fecha)
}



function limpiarHTML () {
    while (registros.firstChild){
        registros.removeChild(registros.firstChild);
    }
}