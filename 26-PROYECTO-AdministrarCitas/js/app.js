//Variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//UI
const formularioInputs = document.querySelector('#nueva-cita');
const campoCitas = document.querySelector('#citas');

let editando;


//Clases
class Citas{
    constructor(){
        this.citas = []
    }
    agregarCitas(cita){
        this.citas = [...this.citas, cita];
    }
    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);   
    }
    remplazarDatosDeCita(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        
    }
}

class UI{

    //Creamos el div de alerta
    imprimirAlerta(mensaje, tipo){
        const divAlertaCampos = document.createElement('DIV');
        divAlertaCampos.textContent = mensaje;
        divAlertaCampos.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(tipo === 'error'){
            divAlertaCampos.classList.add('alert-danger');
        }else{
            divAlertaCampos.classList.add('alert-success');
        }

        document.querySelector('#contenido').insertBefore(divAlertaCampos, document.querySelector('.agregar-cita'));

        setTimeout(() => {
            divAlertaCampos.remove();
        }, 3000);
    }
    mostrarCitas({citas}){

        limpiarCitas();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;
            
            //Scripting para el contenido de cada cita
            const mascotaCita = document.createElement('H2');
            mascotaCita.classList.add('card-title', 'fond-weight-bolder');
            mascotaCita.textContent = mascota;

            const propietarioCita = document.createElement('P');
            propietarioCita.innerHTML = `
                <span class="fond-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoCita = document.createElement('P');
            telefonoCita.innerHTML = `
                <span class="fond-weight-bolder">Telefono: </span> ${telefono}
            `;

            const fechaCita = document.createElement('P');
            fechaCita.innerHTML = `
                <span class="fond-weight-bolder">Fecha: </span> ${fecha}
            `;

            const horaCita = document.createElement('P');
            horaCita.innerHTML = `
                <span class="fond-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasCita = document.createElement('P');
            sintomasCita.innerHTML = `
                <span class="fond-weight-bolder">Sintomas: </span> ${sintomas}
            `;

            const btnEliminar = document.createElement('BUTTON');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            `;
            btnEliminar.onclick = () => {
                eliminarCita(id);
            }

            const btnEditar = document.createElement('BUTTON');
            btnEditar.classList.add('btn', 'btn-info', 'mr-2');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>          
            `;
            btnEditar.onclick = () => {
                editarCita(cita);
            }

            divCita.appendChild(mascotaCita);
            divCita.appendChild(propietarioCita);
            divCita.appendChild(telefonoCita);
            divCita.appendChild(fechaCita);
            divCita.appendChild(horaCita);
            divCita.appendChild(sintomasCita);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);
            
            


            campoCitas.appendChild(divCita);
        })
        function limpiarCitas(){
            while(campoCitas.firstChild){
                campoCitas.removeChild(campoCitas.firstChild);
            }
        }
    }

}
 

//Instanciamos
const administrarCitas = new Citas();
const ui = new UI();


//Eventos
eventListeners()
function eventListeners(){
    mascotaInput.addEventListener('input', agregarDato)
    propietarioInput.addEventListener('input', agregarDato)
    telefonoInput.addEventListener('input', agregarDato)
    fechaInput.addEventListener('input', agregarDato)
    horaInput.addEventListener('input', agregarDato)
    sintomasInput.addEventListener('input', agregarDato)

    formularioInputs.addEventListener('submit', alertas)
    
}


//Objeto con informaion de la cita
const datosObj = {
    mascota:'',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas:''
}

//Funciones

//Agrega los datos al objeto de cita
function agregarDato(e){
    datosObj[e.target.name] = e.target.value;

}

function alertas(e){
    e.preventDefault();
    const {mascota, propietario, telefono, fecha, hora, sintomas} = datosObj;


    //Validamos que todos los campos esten llenos
    if (mascota === '' || propietario === '' || telefono === '', fechaInput === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if (editando) {
        //Cambiamos le texto al presionar que queremos editar 
        formularioInputs.querySelector('button[type="submit"]').textContent = 'Crear cita';

        //Vamos a metodo para remplazar los dator ya que le pasamos los datos
        administrarCitas.remplazarDatosDeCita({...datosObj});

        //Alerta de respuesta
        ui.imprimirAlerta('Editado correctamente')

        //Regresamos el valor para que salga de modo edicion
        editando = false;
    }else{
        //Darle un ID al objeto 
        datosObj.id = Date.now();
    
        //Creando nueva cita
        administrarCitas.agregarCitas({...datosObj});

        //Creamos alerta de respuesta
        ui.imprimirAlerta('Agregado correctamente')
    }


    //Formatear el formulario
    formularioInputs.reset();

    //Reiniciamos los datos o los vaciamos
    reiniciarObjeto();

    //Mandamos alerta de exito
    ui.mostrarCitas(administrarCitas);
}

function reiniciarObjeto(){
    datosObj.mascota = '',
    datosObj.propietario = '',
    datosObj.telefono = '',
    datosObj.fecha = '',
    datosObj.hora = '',
    datosObj.sintomas = ''
}

function eliminarCita(id){
    //Eliminar cita
    administrarCitas.eliminarCita(id);

    //Mostrar mensaje
    ui.imprimirAlerta('Eliminado con Exito');

    //Muestra el arreglo nuevo
    ui.mostrarCitas(administrarCitas);
}

//Cargamos los datos al editar
function editarCita(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    //Pasamos los valores a las cajas correspondientes
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    datosObj.mascota = mascota;
    datosObj.propietario = propietario;
    datosObj.telefono = telefono;
    datosObj.fecha = fecha;
    datosObj.hora = hora;
    datosObj.sintomas = sintomas;
    datosObj.id = id;

    //Cambiamos le texto al presionar que queremos editar 
    formularioInputs.querySelector('button[type="submit"]').textContent = 'Guardar cambios';
    
    //Pasando el valor para el modo edicion
    editando = true;

}