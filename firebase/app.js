import { saveData, getData} from "./firebase.js";

const formulario = document.querySelector('#form')
const registros = document.querySelector('#container')
let estado;
window.addEventListener('DOMContentLoaded', async () =>{
    console.log(Date());
 
    // const querySnapshot = getData();
    const registro = await getData()
    registro.forEach(element => {
        let registro = document.createElement("div")
        if(element.data().alimentar){
            estado = 'Pendiente para servir'
        } else {
            estado = 'surtido'
        }
        registro.innerHTML = `<h3>Registro</h3>
        <p>Fecha: ${element.data().fecha}</p>
        <p>Hora: ${element.data().hora}</p>
        <p>Estado: ${estado}</p>`;
        registros.appendChild(registro);
    });
    
});

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const fecha = formulario['fecha'];
    const hora = formulario['hour'];
    const alimentar = formulario['alimentar'];
    
    if(Date < fecha.value){
        console.log('sI');
        //error
    } else {
        console.log('No');
    }


    saveData(hora.value, Boolean(alimentar.value), fecha.value)
    formulario.reset();
});
