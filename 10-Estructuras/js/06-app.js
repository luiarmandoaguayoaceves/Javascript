const sesion = true;
const fondos = false;

if(sesion && fondos){
    console.log('Redirigiendo a pagos....')
}else if(!sesion && !fondos){
    console.log('Necesitas crear cuenta y trabajar mas')
}else if(!sesion){
    console.log('create una cuenta');
}else if(!fondos){
    console.log('trabajale mas papito');
}else{
    console.log('Error en la matrix ');
}