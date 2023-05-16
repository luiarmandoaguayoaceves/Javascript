const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

//Cargar todos los eventos
cargarEventos();
function cargarEventos(){
    //Agregar cursos
    listaCursos.addEventListener('click', agregarCarrito);

    //Eliminar cursos
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    vaciarCarrito.addEventListener('click', () =>{
        articulosCarrito = [];
        limpiarHTML();
    });

    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        muestraHTML();
    })
}

//agregar al carrito
function agregarCarrito (e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const seleccionarDatos = e.target.parentElement.parentElement;
        tomarDatos(seleccionarDatos);
    };
}
//Eliminar curso del carrito
function eliminarCurso(e){
     e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const id = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id )
        muestraHTML();
    }
}

//Tomar datos
function tomarDatos(datos){
    // console.log(datos)
    infoCurso = {
        imagen: datos.querySelector('img').src,
        titulo: datos.querySelector('h4').textContent,
        precio: datos.querySelector('.precio span').textContent,
        id:datos.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Validar si existe el curso en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        const aumenta = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        articulosCarrito = [...aumenta];
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }     
    muestraHTML();
};


//Muestra el carrito de compras
function muestraHTML(){
    
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('TR');
        row.innerHTML = `
        <td>
        <img src='${imagen}' width='100'>
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-curso" data-id='${id}'>X</a>
        </td>
        `
        contenedorCarrito.appendChild(row);
    });
    sincronizarLocarStorage();
}

function sincronizarLocarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}
//Limpia el carrito
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstElementChild)
    }
}