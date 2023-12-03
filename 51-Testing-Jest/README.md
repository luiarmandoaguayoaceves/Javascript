## comandos nuevos
    Se pueden crear distintos comandos para ejecutar pruebas unitarias con jest en esta ocacion los comandos se declaran en package.json
    npm t = npm test 

### Capitulo de Snapshots
Se recomienda no manipular es snapshot creado lo mas recomndado es actualizar o eliminar carpeta
    actualizar snapshot para cuando quieras validar con otros datos en el string
        npm t -- -u

    Intalar Babel para transpilar mi codigo a una version soportada 
        npm i  --save-dev @babel/preset-env

    Error encontrado con la nueva paqueteria de babel y es que se requiere de instalacion de una herramienta llamada jsdom se instala
            npm install --save-dev jsdom
    
    despues de la isntalacion se agrega al archivo de package.json despues de los test ej.
     .....   
    "scripts": {
        "test": "jest"
    },

    "jest": {
        "testEnvironment": "jsdom"
    },
    
    "author": "Luis Armando Aguayo Aceves",
    "license": "ISC"....

    Despues se encuentra un error en la prueba jest que te pide ajustar o cambiar es un ejemplo de la pruebas de jest

    Notas: Tenes cuidado al importar cuando se importa una funcion o funciones se puede usar llaves {} pero para importar la clase completa no poner llaves 