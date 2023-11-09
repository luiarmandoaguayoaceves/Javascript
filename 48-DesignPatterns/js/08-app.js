// Mediator o intermediario

function Vendedor (nombre){
    this.nmombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador (nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: ${cantidad}`);
    }
}

function Subasta (){
    let compradores = {}

    return{
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear objetos

const juan = new Comprador ('Juan')
const luis = new Comprador ('Luis Armando')
const vendedor = new Vendedor ('Vendedor de autos')
const subasta = new Subasta ()

// Registrarlos
subasta.registrar(juan);
subasta.registrar(luis);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300)
juan.oferta(300, juan);
luis.oferta(350, luis);
juan.oferta(400, juan);
luis.oferta(450, luis);

vendedor.vendido('Luis Armando')