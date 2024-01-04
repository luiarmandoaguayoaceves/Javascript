// const express = require('express'); // sintaxis comonjs
import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto 
const port = process.env.PORT || 4000;
/*     
                       ? req - lo que enviamos : res lo que express nos responde
app.get('/', (req, res) => {
    
                                            ? imprime plano
    res.send('Incio')

                                            ?Imprimie un json
    res.json({  
        id: 1
    })

                                            ? mostrar vista
    res.render();
})*/


//Agregar router 

app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})