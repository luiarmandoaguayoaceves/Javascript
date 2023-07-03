let cliente = {
    mesa: '',
    hora:'',
    pedido: []
};

const categorias = {
    1: 'Comidas',
    2: 'Bebidas',
    3: 'Postres'
}

const btnEnviarFormulario = document.querySelector('#guardar-cliente');
btnEnviarFormulario.addEventListener('click', agregarUsuario)

function agregarUsuario () {
    //tomamos datos de los inputs 
    const mesa = document.querySelector("#mesa").value;
    const hora = document.querySelector('#hora').value;

    //Recorremos los valores en busca de un valos vacio 
    const validarInputs = [mesa, hora].some( articulo => articulo === '');

    //validar el resultado
    if (validarInputs){

        //Buscar etiqueta con esa clase 
        const existeAlerta = document.querySelector('.invalid-feedback');

        //Validamos si existe y si no creamos
        if(!existeAlerta){
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent ='Por favor ingrese todos los datos';
            document.querySelector('.modal-body form').appendChild(alerta);    
            //Eliminamos alerta despues de 3 seg
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }

    cliente = {...cliente, mesa, hora};

    const modalFormulario = document.querySelector('#formulario');
    const modalBoostrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBoostrap.hide();
    // console.log(cliente);

    //Mostra secciones
    mostrarSecciones();

    //Consultar API de platillos
    consultarPlatillos();
}

//Fincion para mostrar secciones
function mostrarSecciones () {
    const mostrarSeccion = document.querySelectorAll('.d-none');
    mostrarSeccion.forEach( seccion => seccion.classList.remove('d-none'))
}

function consultarPlatillos() {
    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarPlatillo(resultado))
        .catch( error => console.log(error))
}

function mostrarPlatillo (platillos) {
    const campoPlatillos = document.querySelector('#platillos .contenido')
    
    platillos.forEach( platillo => {
        const {nombre, precio, categoria, id} = platillo;
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombrePlatillo = document.createElement('DIV');
        nombrePlatillo.classList.add('col-md-4');
        nombrePlatillo.textContent = `${nombre}`;

        const precioPlatillo = document.createElement('DIV');
        precioPlatillo.classList.add('col-md-3', 'fw-bold');
        precioPlatillo.textContent = `$${precio}`;

        const categoriaPlatillo = document.createElement('DIV');
        categoriaPlatillo.classList.add('col-md-3');
        categoriaPlatillo.textContent = `${categorias[categoria]}`;

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type='number' ;
        inputCantidad.classList.add('form-control');
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.onchange = function () {
            const cantidad = parseInt( inputCantidad.value );
            calcularCantidad({...platillo, cantidad})
        }

        const agregar = document.createElement( 'DIV' );
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombrePlatillo);
        row.appendChild(precioPlatillo);
        row.appendChild(categoriaPlatillo);
        row.appendChild(agregar);
        
        campoPlatillos.appendChild(row);
    })
}

function calcularCantidad (producto) {
    //Extrae el pedido actual
    const { pedido } = cliente;
    //Revisa que la cantidad sea mayor a 0
    if (producto.cantidad > 0 ){
        //Comprobar si el elemento exite en el arreglo
        if (pedido.some(articulo => articulo.id === pedido.id)){
            //El objeto si existe y tienes que incrementar el valor

        } else {
            //El articulo no existe y se agrega al array de pedido
            cliente.pedido = [...pedido, producto]
        }
    } else {
        console.log('No mayor a 0');
    }
    console.log(cliente.pedido);
}