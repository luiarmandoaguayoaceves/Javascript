import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"
import { getDatabase, get, ref, set, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js"
let validador;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYZRsxU4VZBwDznNHoQoPv1AuQeMBiZko",
    authDomain: "accesoesp32.firebaseapp.com",
    databaseURL: "https://accesoesp32-default-rtdb.firebaseio.com",
    projectId: "accesoesp32",
    storageBucket: "accesoesp32.appspot.com",
    messagingSenderId: "241841803134",
    appId: "1:241841803134:web:b387cca5679ac736af2d2f",
    measurementId: "G-FFQ1VFELW9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
window.addEventListener('DOMContentLoaded', SelectData())
const btnAccionador = document.querySelector('#alimentar');


document.querySelector('#form').addEventListener('submit', function(e) {
  e.preventDefault();
  const dbref = ref(database);
  get(child(dbref, 'despachar/')).then((snapshot) => {
    validador = snapshot.val();
    if (validador == true){
      btnAccionador.textContent = 'Abrir';
      btnAccionador.style.background = 'Green';
      btnAccionador.style.color = 'white';
      set(ref(database), {
        despachar:false
      });
      alert('Apagado');
    } else {
      btnAccionador.textContent = 'Cerrar';
      btnAccionador.style.background = 'Red';
      btnAccionador.style.color = 'white';
      set(ref(database), {
        despachar:true
      });
      alert('Encendido');
    }
  })
  
})




function SelectData (){
  const dbref = ref(database);
  get(child(dbref, 'despachar/')).then((snapshot) => {
    validador = snapshot.val();
    if (validador == true){
      btnAccionador.textContent = 'Cerrar';
      btnAccionador.style.background = 'Red';
      btnAccionador.style.color = 'white';
    } else {
      btnAccionador.textContent = 'Abrir';
      btnAccionador.style.background = 'Green';
      btnAccionador.style.color = 'white';
    }
  })
}
