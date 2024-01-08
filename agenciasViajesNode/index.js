// const express = require('express'); // sintaxis comonjs
import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto 
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

//Agregar la fecha crear un midelware
app.use( (req, res, next) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de viajes"
    next();
})

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router 

app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})