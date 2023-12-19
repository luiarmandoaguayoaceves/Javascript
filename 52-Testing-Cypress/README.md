Inicializar proyecto 
    npm init
Instalar Cypress en desarrollo
    npm i --dave-dev cypress
Se elimino la carpeta de ejemplos solo para utilizar los necesarios
    Carpeta cypress -> e2e -> 2-examples

En la carpera e2e se crearan las pruebas a realizar

 Se recomienda poner esta linea al principio para que te de mejores resultados el autocompletado
/// <reference types="cypress" />

Ejecutar cypress en terminal para pruebas
    npx cypress open


### Atributos de cypress
    [Sintaxis de cypress](https://docs.cypress.io/guides/references/best-practices#__docusaurus_skipToContent_fallback)
    

    en el archivo de configuracion se agrega el dominio de la pagina y en cada prueba la ruta del archivo 


Para evitar que se actualice la paguina agregamos la siguiente configuracion con la intencion de que la siguiente tarea de editar no falle o genere una recarga de poaguina en blanco esta configuracion se realiza en cypress.config.js a la altura de setupNodeEvents o dentro de e2e como otra configuracion
    testIsolation: false

    ejemplo:

    const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress';
      viewportHeight: 1500;
      vieewportWidth: 1200;
    },
    testIsolation: false
  },
});


## Se puede ejecutar Cypress en CLI?
    Si si se puede y el comando es el siguiente 
        npx cypress run

    Cypress en CLI puede crear videos y hacer Screenshots 
    El video lo peudes generar configurandi el cypress.config.json agregando 
        // video: true,  //Generador automatico de video para pruebas
        // videoCompression: 0, //Mejor calidad de video
        // videoCompression: 51, //Menor calidad de video
    El screenshot lo puedes tomar en las mismas pruebas agregando la siguiente linea de codigo
        cy.screenshot();