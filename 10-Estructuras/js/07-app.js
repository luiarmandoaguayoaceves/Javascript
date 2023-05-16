const efectivo = 400;
const tarjeta = 600;
const disponible  = efectivo + tarjeta;
const totalPagar = 1000;

if(efectivo >= totalPagar || tarjeta >= totalPagar || disponible >= totalPagar){
    console.log('La consola es tuya');
}else{
    console.log('A seguir trabajando bro');
}