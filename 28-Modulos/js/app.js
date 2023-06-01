import nuevoExport, { nombreCliente, juego, ahorrar, monto, saldo, fondos, Cliente} from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(ahorrar(nombreCliente, juego, monto));

saldo(fondos);

const cliente = new Cliente(nombreCliente, fondos, juego, monto);
console.log(cliente);

console.log(cliente.mostrarFondos(nombreCliente, juego, monto));

const empresa = new Empresa(nombreCliente, juego, fondos, monto);
console.log(empresa);

nuevoExport();