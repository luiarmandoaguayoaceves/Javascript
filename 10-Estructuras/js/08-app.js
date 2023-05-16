const sesion = true;

if (sesion){
    console.log('Usuario autenticado');
}else{
    console.log('Inicia sesion');
}

const puntaje = 350;

function calificacion(){
    if(puntaje >= 400){
        console.log('Excelente...');
        return;
    }

    if(puntaje >=300){
        console.log('Buena calificacion');
        return;
    }
}

calificacion();