document.addEventListener('DOMContentLoaded', mostrarDatos);

function mostrarDatos(){
    const url = 'https://pokeapi.co/api/v2/pokemon'
    fetch(url)
    .then ( resultado => resultado.json())
    .then ( resultado => mostrarHTML(resultado.results))
}

function mostrarHTML(pokemones){
    const contenido = document.querySelector('#contenido');
    let html = '';
    pokemones.forEach( (pokemon) => {
        const {name, url} = pokemon;
        html += `
        <p>Nombre: ${name}</p>
        `;
    });
    contenido.innerHTML = html;
}