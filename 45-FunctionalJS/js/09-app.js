//Partial & curring 
const suma = (a,b,c) => a+b+c;

//!Forma UNO de hacer el parcial & curring 
// const parcial = a => (b,c) => suma (a, b, c)

// const segundoNumero = parcial(4)
// const resultado = segundoNumero(3,2)
// console.log(resultado);

const parcial = a => b => c => suma (a,b,c);

//!Forma DOS de hacer el parcial & curring 
// const primerDato = parcial(5);
// const segundoDato = primerDato(4);
// const resultado = segundoDato(3);

//!Forma TRES de hacer el parcial & curring 
const resultado =parcial(5)(4)(3)
console.log(resultado);