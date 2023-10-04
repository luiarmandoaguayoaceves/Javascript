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
    let { pedido } = cliente;
    //Revisa que la cantidad sea mayor a 0
    if (producto.cantidad > 0 ){
        
        //Comprobamos que existe el articulo
        if(pedido.some(articulo => articulo.id === producto.id)){

            //Modificar el arreglo sin agregar otro objeto
            const pedidoActualizado = pedido.map( articulo => {
                if ( articulo.id === producto.id ){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });

            cliente.pedido = [...pedidoActualizado];
        } else {
            //El articulo no existe, se agrega al array de articulos
            cliente.pedido = [...pedido, producto]
        }
        
    } else {
        
        //Eliminamos o filtramos articulo del array de articulos y almacenamos una copia en el objeto de cliente en el arreglo de pedido
        const resultado = pedido.filter( articulo => articulo.id != producto.id)
        cliente.pedido = [...resultado]
        
    }
    //Limpiar HTML 
    limpiarHTML();

    if (cliente.pedido.length){
        //Aqui mostraremos el resumen del pedido
        mostrarResumem();
    }else {
        mensajePedidoVacio();
    }
        
}


//Esta funcion genera muchi scripting para mostrar resultados 
function mostrarResumem () {
    // console.log('Desde actualizar resumen');

    const contenido  = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');
    
    //Informacion de Mesa 
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');


    //Informacion de Horario
    const horario = document.createElement('P');
    horario.textContent = 'Horario: ';
    horario.classList.add('fw-bold');

    const horarioSpan = document.createElement('SPAN');
    horarioSpan.textContent = cliente.hora;
    horarioSpan.classList.add('fw-normal');


    //Agrgar al padre (un parrafo)
    mesa.appendChild(mesaSpan);
    horario.appendChild(horarioSpan);

    const heading =  document.createElement('H3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('my-4', 'text-center');

    //Iterar sobre el arreglo de platillos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach( platillo => {
        const { nombre, precio, id, cantidad } = platillo;
        
        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        //Nombre de platillo
        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;
        

        //Cantidad de platillos
        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        const valorCantidad = document.createElement('SPAN');
        valorCantidad.classList.add('fw-normal');
        valorCantidad.textContent = cantidad;

        //costo de platillos
        const costoEl = document.createElement('P');
        costoEl.classList.add('fw-bold');
        costoEl.textContent = 'Precio: ';

        const valorCosto = document.createElement('SPAN');
        valorCosto.classList.add('fw-normal');
        valorCosto.textContent = calcularSubTotal(precio, cantidad);


        //Boton para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';

        //funcion para eliminar del pedido 
        btnEliminar.onclick = function() {
            eliminarProducto(id)
        }

        function calcularSubTotal (precio, cantidad) {
            return `$${precio * cantidad}`;
        }
        
        //agregar valor a la etiqueta padre
        cantidadEl.appendChild(valorCantidad);
        costoEl.appendChild(valorCosto);

        //Agregar parrafo a la lista
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(costoEl);
        lista.appendChild(btnEliminar);


        //Agregar datos al grupo
        grupo.appendChild(lista);


    });


    //Agregar a un div 
    resumen.appendChild(mesa);
    resumen.appendChild(horario);
    resumen.appendChild(heading);
    resumen.appendChild(grupo);

    //Agregado al contenido
    contenido.appendChild(resumen);
}

function limpiarHTML () {
    const contenido  = document.querySelector('#resumen .contenido');
    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild)
    }
}

//Funcion para eliminar un platillo
function eliminarProducto(id) {
    const {pedido} = cliente

    //Eliminamos o filtramos articulo del array de articulos y almacenamos una copia en el objeto de cliente en el arreglo de pedido
    const resultado = pedido.filter( articulo => articulo.id != id)
    cliente.pedido = [...resultado]
    reiniciarValor = document.querySelector(`#producto-${id}`);
    reiniciarValor.value = 0;
    
    //Limpiar HTML 
    limpiarHTML();
    
    // si el arreglo esta vacio dejamos el mensaje principal de la pagina de ser caso contrario solo se actualiza la lista y permanecen los otros productos
    if (cliente.pedido.length){
        //Aqui mostraremos el resumen del pedido
        mostrarResumem();
    }else {
        mensajePedidoVacio();
    }

}

function mensajePedidoVacio () {
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent= 'Añade los elementos del pedido';

    contenido.appendChild(texto)
}
