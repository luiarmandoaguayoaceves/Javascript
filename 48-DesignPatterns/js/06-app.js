class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion () {
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre () {
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const persona = new Persona('Luis Armando', 'correo@correo.com');
const cliente = new Cliente('Eduardo', 'eduardo@eduardo.com');


console.log(persona);;
persona.mostrarInformacion();
persona.mostrarNombre();

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();