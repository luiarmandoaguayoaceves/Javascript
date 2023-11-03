//Esta plactica es la composicion y es una opcion como las clases que permite reutilizar funciones en lugar de heredar los objetos los creas y los reutilizar es otra opcion y se ve de la siguiente manera

const tomarNombre = info =>({
    mostrarNombre(){
        console.log(`El nombre es: ${info.nombre}`);
    }   
})

const tomarCorreo = info => ({
    guardarCorreo(email){
        console.log(`El correo se guardo en : ${info.nombre}`);
        info.email = email;
    }
})

const guardarCorreo = info =>({
    mostrarCorreo () {
        console.log(`El correo es: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa () {
        console.log(`La empresa es: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto () {
        console.log(`El puesto es: ${info.puesto}`);
    }
})


function Cliente (nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        tomarNombre(info),
        tomarCorreo(info),
        guardarCorreo(info),
        obtenerEmpresa(info)
    )
}

function Empleado (nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        tomarNombre(info),
        tomarCorreo(info),
        guardarCorreo(info),
        obtenerPuesto(info)
    )
}


const cliente = Cliente('Luis', null, 'Brades');
cliente.mostrarNombre();
cliente.guardarCorreo('correo@correo.com');
cliente.mostrarCorreo();
cliente.mostrarEmpresa();
const empleado = Empleado('Armando', null, 'Programador');
empleado.mostrarNombre();
empleado.guardarCorreo('empleado@empleado.com');
empleado.mostrarCorreo();
empleado.mostrarPuesto();