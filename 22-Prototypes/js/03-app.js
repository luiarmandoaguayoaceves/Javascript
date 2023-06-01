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

function Autos(marca, modelo, anio, km, precio){
    this.marca = marca
    this.modelo = modelo
    this.anio =anio
    this.km = km
    this.precio = precio
}

Autos.prototype.seguro = function () {
    if(this.marca == 'BMW'){

        if(this.modelo == 'Lujo'){
            if(this.anio >= 2022){
                if(this.km >=21000){
                    costo = this.precio*2 
                    console.log('Este es el primero',this.precio);
                }
            }
        }
    }else if (this.marca == 'Mercedes' ){
        if(this.modelo == 'clasico'){
            if(this.anio >= 2022){
                if(this.km >= 1000){
                    costo = this.precio * 1.09
                    console.log('Este es el segundo', costo);
                }
            }
        }
    }
}

const mercedes = new Autos('Mercedes', 'clasico', 2023, 20000, 1000000)
mercedes.seguro();
console.log(mercedes);