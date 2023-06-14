import { saveData, getData} from "./firebase.js";
window.addEventListener('DOMContentLoaded',  () =>{
    getData();
    
});

const formulario = document.querySelector('#form')
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const fecha = formulario['fecha'];
    const hora = formulario['hour'];
    const alimentar = formulario['alimentar'];
    saveData(hora.value, Boolean(alimentar.value), fecha.value)
    formulario.reset();
});
