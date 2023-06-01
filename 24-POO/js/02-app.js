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

//Instanciar 
const juan = new Cliente('juan', 26);

//Imprimir y mandar a llamar el los metodos(funciones es lo mismo)
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida()); //Cuando es Static se llama desde la clase 