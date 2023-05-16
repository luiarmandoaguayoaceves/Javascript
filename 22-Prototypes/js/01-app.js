const persona = {
    nombre: 'Juan',
    sueldo: 500
}

console.log(persona);


function usuario(nombre, sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo;
}

const Luis = new usuario('Luis', 6000);
console.log(Luis);


function personal(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const felipe = new personal('Felipe', 'Arandas');
const Alejandro = new personal('Alejandro', 'Aranda');
const pedro = new personal('pedro', 'Arand');
const pablo = new personal('pablo', 'Aran');
const amigos = new personal('amigos', 'Ara');
console.log(felipe);
console.log(Alejandro);
console.log(pedro);
console.log(pablo);
console.log(amigos);