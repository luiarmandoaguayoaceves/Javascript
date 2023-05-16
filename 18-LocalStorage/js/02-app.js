//Tomar valor de local storage
const nombre = localStorage.getItem('nombre')
console.log(nombre);


console.log(localStorage.getItem('producto'));

//Tomar valor de storage y convertirlo a arreglo
const producto = JSON.parse(localStorage.getItem('producto'));
console.log(producto);

//tomar dato y convertir a arreglo
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);