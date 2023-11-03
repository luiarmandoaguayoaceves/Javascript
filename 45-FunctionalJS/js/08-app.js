const obtenerCliente = () => {
    const nombre = 'Luis Armando';

    function muestraNombre () {
        console.log(nombre);
    }
    return muestraNombre;
}

const consulta = obtenerCliente();
consulta();