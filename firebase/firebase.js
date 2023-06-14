
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"
import { collection, getFirestore, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js"

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
const db = getFirestore(app);

export const saveData = (hora, alimentar, fecha) => {
    addDoc(collection(db, 'despachar'), {hora, alimentar, fecha})
}

export const getData = () => getDocs(collection(db, 'despachar'));