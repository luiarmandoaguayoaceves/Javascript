// Class Pattern

class Persona {
    constructor (email, nombre) {
        this.email = email;
        this.nombre = nombre;
    }
}

const persona = new Persona('correo@correo.com', 'Luis Armando Aguayo Aceves')
console.log(persona);