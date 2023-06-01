const symbol = Symbol('1')
const symbol2 = Symbol('1')

//Los datos a un que lleven los mismo datos tiene la caracteristica de ser diferentes todos
if (symbol === symbol2) {
    console.log('Son la misma cosa maistro');
}else{
    console.log('Nada que ver no lo topo');
}

const nombre = Symbol()
const apellido = Symbol()

const objeto = {}

//Agregas con corchete los datos de tipo Symbol
objeto[nombre] = 'Luis';
objeto[apellido] = 'Aguayo';

//Tradicional con un punto para agregar
objeto.puesto = 'Desarrollador';
objeto.horas = 8;

console.log(objeto);

//para acceder a los datos se requiere poner tambien corchete 
console.log(objeto[nombre]);
console.log('************************Esto de abajo es del for de arriba es otras impresiones***********************');

//No son iterables los datos de tipo symbol solo imprime las agregadas con punto
for(let i in objeto){
    console.log(i);
}

//agregar descripcion a la variable Symbol
const nombreCliente = Symbol('Agregamos nombre al cliente')
const caracteristica = {}
caracteristica[nombreCliente] = 'Felipe'
console.log(caracteristica);

//para entrar al valor
console.log(caracteristica[nombreCliente]);

//Para entrar a la descripcion del Symbol
console.log(nombreCliente);