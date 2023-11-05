# Progressive Web Apps y Service Workers

## Progressive Web App (PWA)
    - Rapidas
    - instalable en navegado o telefono movil como aplicacion nativa
    - Soporte offline


## Service Workers
    - Base de PWA son script que trabajan detras de escena con o sin conexion 
    - No funcione con el DOM
    - Tener aparte
    - Cargan de forma instantanea
    - Sincronizan datos sin interferir en la navegacion cuando tiene internet pero cuando no almacena en cache

    **No soporta y se remplaza para poder usar :**
    - window = self
    - document = caches
    - localStorage = fetch

### Archivo manifes
    Es donde lleva la informacion de la pagina como la configuracion, que tipo orientacion, cual es la pagina de inicio, el tema, el color, los iconos etc.

### Archivo App 
    Se muestra como se registra un Service Worker y se crea un archivo js en la raiz  

### Archivo sw
    Se agrega el codigo de instalacion que solo se ejecutara una vez despues de ser instalado y tambien se activa 
    Intalacion es bueno para: tomar datos de cache
    Activacion es bueno para nuevas versiones de PWA
    cargamos en cache los archivos que queremos que se ejecuten offline 
    *En caso que marque errores se debe eliminar cache y de las herramientas de desarrollador y del boton de recargar click derecho ademas*

### Archivo error.html 
    Para cuando no encuentra la pagina principal

### versionado
    Se agrega el versionado en SW.js donde se actualiza la cache pero se debe activar la casilla de actualizar al levantar servicio en aplicacion desde la consola de desarrollo 
