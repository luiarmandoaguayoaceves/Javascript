( function (){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarClientes);

    function validarClientes (e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validacion(cliente)){
            //? Mostrar mensaje de llenar campos
            console.log('Todos los campos son obligatorios');
            return;
        }

        console.log('Registro realizado con exíto' );
    }

    //!Se recomienda realizar de esta manera la validacion de los campos en un formulario
    function validacion (obj){
        return !Object.values(obj).every(input => input !== '');
    }

})();