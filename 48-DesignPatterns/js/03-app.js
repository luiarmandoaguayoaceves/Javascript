// Singleton
let iinstancia = null;

class Persona {
    constructor (nombre, email){
        if(!iinstancia){
            this.nombre = nombre;
            this.email = email;
            iinstancia = this;

        }else {
            return iinstancia;
        }
    }
}

const persona = new Persona ('Luis Armando', 'corrreo@correo.com');
console.log(persona);

const persona2 = new Persona ('Karen', 'karen@caren.com');
console.log(persona2);