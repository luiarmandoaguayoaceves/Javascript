iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...');
    revizarBD();
    validadoUsuario();
    exito();
    bienvenido('Luis');
}

function validadoUsuario(){
    console.log('Validando Usuario...');
}

function revizarBD(){
    console.log('Revisando Base de Datos...');
}

function exito(){
    console.log('Usuario validado exitosamente....')
}

function bienvenido(nombre){
    console.log(`Bienvenido ${nombre}`)
}