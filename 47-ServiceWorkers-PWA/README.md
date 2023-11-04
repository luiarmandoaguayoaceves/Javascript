# Progressive Web Apps y Service Workers

## Progressive Web App (PWA)
    Rapidas
    instalable en navegado o telefono movil como aplicacion nativa
    Soporte offline


## Service Workers
    - Base de PWA son script que trabajan detras de escena con o sin conexion 
    - No funcione con el DOM
    - Tener aparte
    - Cargan de forma instantanea
    - Sincronizan datos sin interferir en la navegacion cuando tiene internet pero cuando no almacena en cache

    - No soporta y se remplaza para poder usar :
    - window = self
    - document = caches
    - localStorage = fetch