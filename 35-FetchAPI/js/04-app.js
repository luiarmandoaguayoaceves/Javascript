const ApiBtn = document.querySelector('#cargarAPI')
ApiBtn.addEventListener('click', cargarDatos);

function cargarDatos() {
    const url = 'https://picsum.photos/list'
    fetch(url)
        .then ( resultado => resultado.json())
        .then ( resultado => mostrarHTML(resultado))
}

function mostrarHTML(usuarios){
    const contenido = document.querySelector('.contenido');
    let html = ''
    usuarios.forEach( usuario => {
        const {author, author_url} = usuario;
        html += `
        <p> El autor es: ${author}</p>
        <a href="${author_url}" target="_blank">Ver Imagen</a>
        `;
    });
    contenido.innerHTML = html;
}