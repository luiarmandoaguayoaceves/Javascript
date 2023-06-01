/* Los WeakSet  esto es similar a Set solo que este solo acepta objetos
 no puedes usar size para ver la longitud y tampoco puedes agregar datos que no sean objetos
*/

const weakset = new WeakSet()

const usuario = {
    nombre: 'Luis',
    saldo: 200
}
//Agregar dato a variable de tipo WeakSet
weakset.add(usuario);

//Para buscar un objeto repondiendo boleano 
console.log(weakset.has(usuario));

//Este elimina el objeto
weakset.delete(usuario);


console.log(weakset);