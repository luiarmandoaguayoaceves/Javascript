const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const meses2 = ['Mayo', 'Junio', 'Julio'];
const meses3 = ['Agosto', 'Septiembre', 'Octubre'];

//con el methodo concat
const resultado1 = meses.concat(meses2, meses3)
console.log(resultado1);

//Con spread operator que seria el uso de los tres puntos
const resultado2 = [...meses, ...meses2, 'Agosto', ...'Septiembre']
console.log(resultado2)