let iterador = 1;
document.addEventListener('DOMContentLoaded', mostrarDatos);

function mostrarDatos(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    fetch(url)
    .then ( resultado => resultado.json())
    .then ( resultado => mostrarHTML(resultado.results))
}

function mostrarPokemon () {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
}

function mostrarHTML(pokemones){
    const contenido = document.querySelector('#contenido');
    pokemones.forEach( (pokemon) => {
        const divPokemon = document.createElement('DIV')
        divPokemon.classList.add('pokemo_card')
        const {name} = pokemon;
        if(iterador === 1011){
            iterador+=8990;
        }
        if(iterador === 10128){
            divPokemon.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${iterador}.png"> 
            <h2>${iterador}</h2>
            <p class="card pokemon${iterador}">Nombre: ${name}</p>
            `;
            return;
        }
        divPokemon.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${iterador}.png"> 
        <h3>N°${iterador}</h3>
        <p class="card pokemon${iterador}">Nombre: ${name}</p>
        `;
        iterador++;
        contenido.appendChild(divPokemon)
    });
    contenido.innerHTML = html;
}