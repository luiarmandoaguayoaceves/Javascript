//Para que se ejecute despues de cargar el HTML

// document.addEventListener('DOMContentLoaded', mostrarDatos)




//Para que se ejecute despues de dar click 
const  arrayBtnJSON = document.querySelector('#cargarJSONArray');
arrayBtnJSON.addEventListener('click', mostrarDatos);

function mostrarDatos (){
    url = 'data/empleados.json';
    fetch(url)
        .then ( respuesta => respuesta.json())
        .then ( respuesta => mostrarHTML(respuesta))
        .catch (error => console.log(error) );
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido')

    let html = '';

    empleados.forEach( empleado => {
        const { nombre, id, empresa, trabajo } = empleado;
        
        html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
    } );
    contenido.innerHTML = html;
}