const curso = document.querySelector('#lista-cursos');
const mostrarCarrito = document.querySelector('#carrito tbody');
const carritoBorrarCurso = document.querySelector('#lista-carrito');
const borrarTodoElCarrito = document.querySelector('#vaciar-carrito');
let carrito = [];

//Cargar eventos desde el inicio
eventos();
function eventos(){
    //Cargar los datos a un arreglo
    curso.addEventListener('click', btnAgregarCarrito);

    //Eliminar curso
    carritoBorrarCurso.addEventListener('click', eliminarCurso);

    //Eliminar todo el carrito
    borrarTodoElCarrito.addEventListener('click', () =>{
        carrito = [];
        limpiarHTML();
    })
}
//Boton de agregar
function btnAgregarCarrito (e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        datos = e.target.parentElement.parentElement;
        tomarDatos(datos)
    }
    mostrarEnHTML();
}

//Eliminar curso
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const id = e.target.getAttribute('data-id')
        carrito = carrito.filter(curso => curso.id !== id)
        mostrarEnHTML();
    }
}

//Recoleccion de datos
function tomarDatos(datos){
    infoCurso = {
        imagen: datos.querySelector('img').src,
        titulo: datos.querySelector('h4').textContent,
        precio: datos.querySelector('.precio span').textContent,
        id: datos.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    const existe = carrito.some(curso => curso.id === infoCurso.id)
    if(existe){
        carrito = carrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;

            }else{
                return curso;
            }
        });
        carrito = [...carrito]
    }else{
        carrito = [...carrito, infoCurso]
    }
};

//Mostrar los datos en el carrito
function mostrarEnHTML(){

    limpiarHTML();
    
    carrito.forEach(curso => {
        const [imagen, titulo, precio, cantidad, id] = curso;
        const row = document.createElement('TR');
        row.innerHTML = `
        <td>
            <img src='${imagen}' width='100'>
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href'#' class='borrar-curso' data-id='${id}'>X</a>
        </td>
        `
        mostrarCarrito.appendChild(row)
    });
}

//Limpieza de HTML
function limpiarHTML(){
    while(mostrarCarrito.firstChild){
        mostrarCarrito.removeChild(mostrarCarrito.firstChild)
    }
}
