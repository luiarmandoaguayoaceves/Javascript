function usuario(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const tachy = new usuario('Luis', 'Aguayo')

function contrato(usuario){
    const {nombre, apellido} = usuario;
    console.log(`El usuario ${nombre} es una pistola y se apellida ${apellido}`);
}

console.log(contrato(tachy));

function empresa(nombre, apellido, puesto){
    this.nombre = nombre;
    this.apellido = apellido;
    this.puesto = puesto;
}

const Bradescard = new empresa('David', 'Alejandro', 'Desarrollador')

function borrar(empresa){
    const {nombre, apellido, puesto} = empresa;
    console.log(`La persona de nombre ${nombre} no trabaja y se apellida ${apellido} ocupando disque el puesto de ${puesto}`);
}

console.log(borrar(Bradescard));