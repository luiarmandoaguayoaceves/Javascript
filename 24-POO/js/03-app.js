class Cliente {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInformacion(){//Se manda a llamar desde el objeto o intancia
        return `La persona de nombre: ${this.nombre} tiene la edad de: ${this.edad}`;
    }

    static bienvenida(){//Metodo(Funcion estatico se manda a llamar desde la clase)
        return 'Bienvenido a la nueva era'
    }
}

class Empresa extends Cliente{
    constructor(nombre, edad, numero, categoria) {
        super(nombre, edad);
        this.numero = numero;
        this.categoria = categoria;
    }

    mostrarDatos(){
        return`La persona de nombre: ${this.nombre} tiene la edad de: ${this.edad} con el siguiente numero ${this.numero} y es de la categoria ${this.categoria}`;
    }

    static bienvenida(){//Metodo(Funcion estatico se manda a llamar desde la clase)
        return 'Bienvenido a la nueva era'
    }
}

//Instanciar 
const juan = new Cliente('juan', 26);
const empresa = new Empresa('Armando', 27, 332835881, 'Haciendo el curso de Juan')

console.log(empresa.mostrarInformacion());
console.log(empresa.mostrarDatos());
console.log(Empresa.bienvenida());