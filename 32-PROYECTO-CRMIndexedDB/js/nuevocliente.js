(function() {

    let DB
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB()
        formulario.addEventListener('submit', validarClientes)
    })
    
    function validarClientes(e) {
        e.preventDefault();
        

        //Tomar datos de los imputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return
        }

        //crear objeto con datos
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        cliente.id = Date.now();
        crearCliente(cliente);
    }

    function crearCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.oncomplete = () => {
            imprimirAlerta('Creado con exito')
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        transaction.onerror = () => {
            imprimirAlerta('El correo ya existe intenta con otro');
        }
    }

    
})();