(function (){
    //Variables
    let DB;
    const listaClientes = document.querySelector('#listado-clientes');

    //despues de cargarse el HTML se ejecute este codigo
    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
        if(window.indexedDB.open('crm', 1)){
            mostrarListaDeClientes();
        }

        listaClientes.addEventListener('click', eliminarUsuario);
    })

    function eliminarUsuario(e) {
        if(e.target.classList.contains('eliminar')){
            const idEliminar = Number(e.target.dataset.cliente);

            const confirmar = confirm('Estas seguro de eliminar este registro?');
            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idEliminar);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();

                };

                transaction.onerror = () => {
                    console.log('Error al eliminar');
                }
            }
            
        };
    }

    //Creando la base de datos
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        //Si hay error
        crearDB.onerror = function() {
            console.log('Hubo un error al momento de crear la DB');;
        }

        //Si todo funciona corre por aca y almacena el resultado en una variable global
        crearDB.onsuccess = function() {
            DB = crearDB.result;
        }


        //Este cofigo se ejecuta una sola vez y es para configurar la DB
        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result;

            //Nombre de la tabla y la llave primaria
            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });
            
            //Estas son las columnas de la DB
            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: false});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: false});
            console.log('DB creada y lista');
        }

    }
    function mostrarListaDeClientes(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.log('Error a la conexion');
        }

        abrirConexion.onsuccess = () => {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result;

                if(cursor){
                    const {nombre, email, telefono, empresa, id} = cursor.value;
                    
                    listaClientes.innerHTML += ` <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${telefono}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${empresa}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
                </tr>
            `;
                    cursor.continue();
                } 
            }
        }
    }


})();