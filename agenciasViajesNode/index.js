// const express = require('express'); // sintaxis comonjs
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos Conectada'))
    .catch( error => console.log('Error al conectar a la base de datos:', error));

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

//Agregar body parser para leer los datos del formulario 
app.use(express.urlencoded({extended: true}));
 
//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router 

app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})