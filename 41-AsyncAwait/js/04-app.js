
function descargarNuevosClientes () {

    return new Promise((resolve) => {
        console.log('Descargando nuevos clientes....');

        setTimeout(() => {
            resolve('Los clientes ya fueron descargados')
        }, 5000);
    })
}

function descargarNuevosPedidos () {

    return new Promise((resolve) => {
        console.log('Descargando nuevos pedidos....');

        setTimeout(() => {
            resolve('Los pedidos ya fueron descargados')
        }, 3000);
    })
}

const app = async () => {
    try {
        //!Si depende de los resultados de una promise hacer la otra consulta esto seria secuencial
        /* 
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);
         */

        // Esta es la manera de ejecutar en paralelo lo que llamarias hilos
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();