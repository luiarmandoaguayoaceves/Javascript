//Explicit Binding

function  persona (el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const nombre = {
    nombre: 'Luis Armando'
}

const generoMusical = ['Rap', 'Trap']

persona.call(nombre, generoMusical[0], generoMusical[1]);

persona.apply(nombre, generoMusical);

const nuevaFn = persona.bind(nombre, generoMusical[0], generoMusical[1]);
nuevaFn();