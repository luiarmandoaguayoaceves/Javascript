## Proyecto de agencia de viajes

1. Instalacion de herramientas 
    - Instalar NodeJS 
    - Instalar expres


        `npm i express`
    - Instalar nodemon (desarrollo)

    
        `npm i --save-dev nodemon`

2. Inicializar proyecto 


    `npm init `
    

3. Levantar servidor local en 2 tipos por modulos nativo de JS o commonjs 
    Ambos funcionan pero para modulos se debe realizar configuracion en el documento pakage.json se agrega tipo modulos


        `"type": "module",`       =        -`import express from 'express';`


                                 ó


        `"type": "commonjs",`     =        -`const express = require('express'); // sintaxis comonjs`

4. se creo una carpeta de rutas 
    express tienen la habilidad de llamar mediante peticiones http como son get, post, put, delete, etc.
    en la carpaeta de las rutas se crearon distintas rutas en las cuales se recive como respuesta usando 

    
                    `   ? req - lo que enviamos : res lo que express nos responde
        app.get('/', (req, res) => {
            
                                                    ? imprime plano
            res.send('Incio')

                                                    ?Imprimie un json
            res.json({  
                id: 1
            })

                                                    ? mostrar vista
            res.render();
        })`
        
        `router.get('/', (req, res) => {
            res.send('Incio')
        });
        router.get('/nosotros', (req, res) => {
            res.send('Nosotros')
        });
        router.get('/contacto', (req, res) => {
            res.send('Contacto')
        });`