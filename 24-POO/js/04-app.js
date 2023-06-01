class Cliente {

    //Privado solo se puede llegar a el mediante sus metodos o usando get y set
    #nombre

    setNombre(nombre){
        this.#nombre =nombre;
    }

    getNombre(){
        return this.#nombre
    }


    constructor(nombre, edad){
        this.#nombre = nombre;
        this.edad = edad;
    }

    mostrarInformacion(){//Se manda a llamar desde el objeto o intancia
        return `La persona de nombre: ${this.#nombre} tiene la edad de: ${this.edad}`;
    }

    static bienvenida(){//Metodo(Funcion estatico se manda a llamar desde la clase)
        return 'Bienvenido a la nueva era'
    }
}

//Instancias 
const luis = new Cliente('Luis', 26);

//Tomo el dato
console.log(luis.getNombre());

//Remlplazo el dato
luis.setNombre('Armando');

//llamo metodo
console.log(luis.mostrarInformacion());

// console.log(luis.#nombre)