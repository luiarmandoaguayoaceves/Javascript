import { obtenerCliente, editarCliente } from "./API.js";
import {mostrarAlerta, validacion} from  './funciones.js'


( function() {

    //Campos de formulario
    const nombreInput = document.querySelector('#nombre');
    const telefonoInput = document.querySelector('#telefono');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        //! Estas dos lineas van de la mano para tomar el ID de la URL en el navegador
        const parametrosURL = new URLSearchParams(window.location.search);  //? <-- esta linea permite tomar la URL 
        const idCliente = parseInt(parametrosURL.get('id')) //? <-- pero esta tiene la url y toma el valor que diga 'id' 

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });

    function mostrarCliente(cliente){
        const {nombre, telefono, email, empresa, id} = cliente;
        nombreInput.value = nombre; 
        emailInput.value = email; 
        telefonoInput.value = telefono; 
        empresaInput.value = empresa; 
        idInput.value = id; 

    }

    function validarCliente (e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        
        if(validacion(cliente)){
            //? Mostrar mensaje de llenar campos
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Reescribe el objeto
        editarCliente(cliente);
    }

})();