//variable del boton
const btnTxt = document.querySelector('#cargarTxt');
//evento click
btnTxt.addEventListener('click', mostrarResultado);

//funcion
function mostrarResultado() {
//Variable url
    const url = 'data/datos.txt';

    //metodo fetch para consumir API
    fetch(url)
    //si realizo la conexion correctamente
    .then( respuesta => {
        console.log(respuesta);//Valor completo con caracteristicas
        console.log(respuesta.status);//solo status 200 encontrado
        console.log(respuesta.statusText); //status Ok  (encontrado)
        console.log(respuesta.url);//url completa
        console.log(respuesta.type);//tipo basico texto plano

        return respuesta.text();//retorna el dato en texto
    })
    .then (datos => {
        console.log(datos);//imprime el valor retornado
    })

    //si no conecto correctamente
    .catch ( error => {
        console.log(error);
    }) 
}