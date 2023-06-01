const efectivo = 900;
const pagar = 1000;
const tarjeta = false;
const cheque = false;

if(efectivo >= pagar){
    console.log('Se paga con efectivo');
}else if (tarjeta){
    console.log('Se paga con tarjeta');
}else if(cheque){
    console.log('Se paga con cheque');
}else{
    console.log('Necesitamos trabajar mas raza');
}