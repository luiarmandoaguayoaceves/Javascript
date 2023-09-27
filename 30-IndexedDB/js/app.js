/*Creando una base de datos local desde el navegador nota: no guardar datos confidenciales
 ya que estan a la vista*/


let DB;

//Cargar la ventana HTML primero y al terminar ejecutar esta linea
document.addEventListener('DOMContentLoaded', () =>{
    //Ejecutar esta funcion
    crmDB()

    //Intervalo de ejecucucion de esta funcion
    setTimeout(() => {
        crearCliente();        
    }, 5000);
})

//Funciones
function crmDB(){
    //Crear Base de datos IndexedBD en el navegador version 1.0
    let crmDB = window.indexedDB.open('crm', 1)

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Ocurrio un error al crear la base de datos');
    }

    //Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base da datos creada con exito');
        DB = crmDB.result;
    }

    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result

        //Se le da nombre a la DB y se le pone un auto incrementable
        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        });

        //Definir las columnas de los datos
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
    }
}

function crearCliente(){
    //tipo de tabla esta ocacion escritura y lectura ("readonly" solo lectura)
    let transaction = DB.transaction(['crm'], 'readwrite');

    //oncomplete para completar se le manda una impresion a consola
    transaction.oncomplete = function () {
        console.log('Transaccion completada');
    }


    //Si hay un error mensaje
    transaction.onerror = function () {
        console.log('Error en la transaccion');
    }

    //declarar variable
    const objectStore = transaction.objectStore('crm');

    //crear objeto para insertar a ls DB
    const nuevoCliente = {
        nombre: 'Luis Armando',
        telefono: 332835881,
        email: 'luis@gmail.com'
    }

    //agregar el objeto a la DB
    const peticion = objectStore.add(nuevoCliente);

    //imprimir insercion 
    console.log(peticion);
}