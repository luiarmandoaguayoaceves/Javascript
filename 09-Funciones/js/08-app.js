function suma(num1, num2){
    return num1 + num2;
}

const resultado = suma(10, 2);
console.log(resultado);

let total = 0;
function carrito(compras){
    return total += compras;
}

total = carrito(300);
total = carrito(300);
total = carrito(400);

function impuesto(pagar){
    return pagar*1.15;
}

const totalNeto = impuesto(total);

console.log(`Antes de impuesto ${total}`);
console.log(`El total neto a pagar es ${totalNeto}`);