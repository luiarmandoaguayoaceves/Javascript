const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress',
    testIsolation: false,
    viewportHeight: 1500,
    vieewportWidth: 1200,
    // video: true,  //Generador automatico de video para pruebas
    // videoCompression: 0, //Mejor calidad de video
    // videoCompression: 51, //Menor calidad de video
  },
});
