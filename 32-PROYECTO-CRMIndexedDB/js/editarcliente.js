(function () {
    //Variable de base de datos
    let DB
    let idCliente

    //variables de los imputs
    const nombreInput = document.querySelector('#nombre') ;
    const emailInput = document.querySelector('#email') ;
    const telefonoInput = document.querySelector('#telefono') ;
    const empresaInput = document.querySelector('#empresa') ;

    const formulario = document.querySelector('#formulario')


    //Ejecuta despues de cargar el documento
    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        //Actualizar usuario
        formulario.addEventListener('submit', alctualizarUsuario);

        //Toma los parametros de la url
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
       if(idCliente){
        setTimeout( () => {
            obtenerCliente(idCliente)
        }, 100)
       }
    });

    //Conexion de la DB
    function conectarDB(){
        const conexionDB = window.indexedDB.open('crm', 1);

        conexionDB.onerror = () => {
            console.log('Error al abrir DB');
        }

        conexionDB.onsuccess = () => {
            DB = conexionDB.result;

        }
    }


    function alctualizarUsuario(e) {
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
          return;
        }
        
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente)
        }
        console.log(clienteActualizado);
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);
        transaction.oncomplete = () => {
            imprimirAlerta('Editado correctamente')
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1000);
        }

        transaction.onerror = () =>{
            imprimirAlerta('Hubo un error', 'error')
        }
    }


    //transaction a la DB
    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');
        
        //Cursor para datos de la DB segun su id
        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor){
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    //Pegar los datos de la DB en los imputs
    function llenarFormulario(datosCliente){
        const {nombre, email, telefono, empresa} = datosCliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    
})();