const url = 'http://localhost:4000/clientes'

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    
    try {
        
        await fetch(url, {
            method: 'POST', //<-- tipo de metodo a la DB
            body: JSON.stringify(cliente),  //<-- Archivo Json hecho string y el dato
            headers: {  // Headers archivos de tipo ....
                'Content-type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }


}

//Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url)
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Eliminar cliente 

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

//Obtiene cliente por si Id 
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return (cliente)

    } catch (error) {
        console.log(error);
    }
}

//Actualiza un registro 

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json'
            }
        });

        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}