//Funcion que lleva una funcion se ve  en elgunas librerias 
const obtenerCliente = () => () => console.log('Luis Armando');;

const fn  = obtenerCliente();

fn();