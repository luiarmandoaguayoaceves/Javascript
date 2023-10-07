//? Ambos funcionan igual uno es mas largo que otro pero otro es mas claro que uno usar fetch con async awai y trycatch y otro como funcion

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

/*      Opcion 1    */

//usando fetch como funcion 
function obtenerDatos() {
    fetch(url)
    .then(respuesta => respuesta.json())  // Convertir la respuesta en JSON
    .then(resultado => console.log(resultado)) //imprimir en consola
    .catch(error = console.log(error)); //En caso de error
}

/*      Opcion 2    */

//Usando fetch con Async await aqui depende del resultado por eso no se puede hacer paralelo
async function obtenerDatos () {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}