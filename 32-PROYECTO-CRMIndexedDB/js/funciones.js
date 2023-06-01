//Conexion de la DB
function conectarDB(){
    const conexionDB = window.indexedDB.open('crm', 1);

    conexionDB.onerror = () => {
        console.log('Error al abrir DB');
    }

    conexionDB.onsuccess = () => {
        console.log('correctamente');
        DB = conexionDB.result;

    }
}

function imprimirAlerta(mensaje, tipo){

    const alerta = document.querySelector('.alerta');
    if(!alerta){
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('px-4', 'py-3', 'rounder', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta')

        if(tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}