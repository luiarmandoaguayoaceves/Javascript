import { nuevoCliente } from './API.js';
import {mostrarAlerta, validacion} from  './funciones.js'
{nuevoCliente}
( function (){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarClientes);

    function validarClientes (e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validacion(cliente)){
            //? Mostrar mensaje de llenar campos
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        nuevoCliente(cliente);
    }

    
})();