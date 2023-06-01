//Agregar dato a local storage
localStorage.setItem('nombre', 'Luis Armando');

const producto = {
    nombre: 'Monitor HD',
    precio: 5000
}

//mandar a local storage pero convertido a string 
localStorage.setItem('producto', JSON.stringify(producto));

const meses = ['Enero', 'Febrero', 'Marzo'];
//pasar a local storage nombre de el valor y el valor convertido a string
localStorage.setItem('meses', JSON.stringify(meses));