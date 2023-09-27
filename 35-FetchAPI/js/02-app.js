//variable de boton json
const cargarJSONBtn = document.querySelector('#cargarJSON');
//evento
cargarJSONBtn.addEventListener('click', subirJSON);

//funcion
function subirJSON() {
//variable url
    const url = 'data/empleado.json'
    //metodo fetch
    fetch(url)
    //si conecto hacer lo siguiente como es u arrow function se puede ahorrar codigo con el return y mandar a una funcion el dato para con eso imprimirlo en HTML 
        .then( resultado => resultado.json())
        .then( json => insertarHTML(json))
}

//funcion para imprimir en la pagina o usar los datos 
function insertarHTML({empresa, id, nombre, trabajo}){//destructuring
    const contenido = document.querySelector('.contenido');//variable
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `
}