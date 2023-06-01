const metodoPago = 'Cheque';

switch (metodoPago){
    case 'Efectivo':
        pagar(metodoPago);
        break;
    case 'Tarjeta':
        console.log(`Pagando con ${metodoPago}`);
        break;
    case 'Cheque':
        pagar(metodoPago);
        break;
    default:
        console.log('Metodo de pago no soportado o fondos insuficientes')

}

function pagar(pago){
    console.log(`Pagando...... con ${pago}`);
}