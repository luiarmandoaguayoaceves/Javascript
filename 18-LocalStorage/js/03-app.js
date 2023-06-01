//Eliminar un elemento
localStorage.removeItem('nombre');

//Para actualizar
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify( mesesArray));


//Borrar todo de local storage
localStorage.clear()