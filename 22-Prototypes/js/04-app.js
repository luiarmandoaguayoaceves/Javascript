//Constructor
function usuario(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//instancia
const luis = new usuario('Luis', 500000)

//Funcion exclusica de un constructor 
usuario.prototype.cuenta = function (){
    let tipo

    if (this.saldo > 20000) {
        tipo = 'Gold';
    }else if(this.saldo > 10000){
        tipo = 'Platinum';
    }else{
        tipo = 'Pobre';
    }
    //retorna valor
    return tipo;
}
//Prototipe con un prototipe anidado
usuario.prototype.negocio = function (){
    console.log(`La persona con el nombre de ${this.nombre} con el saldo de ${this.saldo} tiene una categoria de ${luis.cuenta()}`);
}
//Imprimir la funcion que retorna un valor
console.log(luis.cuenta());

//Emprimir la funcion con un prototipe anidado
luis.negocio();

//imprmir el valor de la instancia
console.log(luis);

//Herencia de atributos
function Persona (nombre, saldo, apellido){
    usuario.call(this, nombre, saldo)
    this.apellido = apellido

    console.log(this.apellido, nombre, saldo);
}

//Herencia de funciones
Persona.prototype = Object.create(usuario.prototype);

//Instancia
const carlos = new Persona('Carlos', 5000, 'Aguayo');

//Usando metodo Heredado
console.log(carlos.cuenta());

//Imprimir valor 
console.log(carlos);