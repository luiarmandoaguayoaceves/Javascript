## Proyecto de agencia de viajes

1. Instalacion de herramientas 
    - Instalar Chocolately 
    - Instalar NodeJS 
    - Instalar expres
    - Instalar PUG
    - instalar posgres y pgAdmin
    - Instalar dotenv

        `npm i dotenv`

        `npm i express`
        
        `npm install pug`

        [Instrala posgres aqui](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

        [Instrala Node aqui](https://nodejs.org/en)

        [Instrala chocolately aqui](https://chocolatey.org/)

    - Instalar nodemon (desarrollo)

    
        `npm i --save-dev nodemon`

2. Inicializar proyecto 


    `npm init `
    

3. Levantar servidor local en 2 tipos por modulos nativo de JS o commonjs 
    Ambos funcionan pero para modulos se debe realizar configuracion en el documento pakage.json se agrega tipo modulos


        "type": "module",`       =        -`import express from 'express';`


                                 ó


        `"type": "commonjs",`     =        -`const express = require('express'); // sintaxis comonjs

4. se creo una carpeta de rutas 
    express tienen la habilidad de llamar mediante peticiones http como son get, post, put, delete, etc.
    en la carpaeta de las rutas se crearon distintas rutas en las cuales se recive como respuesta usando 

    
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
        })`
        
        `router.get('/', (req, res) => {
            res.send('Incio')
        });
        router.get('/nosotros', (req, res) => {
            res.send('Nosotros')
        });
        router.get('/contacto', (req, res) => {
            res.send('Contacto')
        });

5. Abrir pgAdmin (federator) e incertar los datos a la base de datos de viajes usando el siguiente codigo para pgAdmin

    
        
        DROP TABLE IF EXISTS viajes;
    
        CREATE TABLE viajes (
        id serial PRIMARY KEY,
        titulo varchar(60),
        precio numeric(10, 2),
        fecha_ida date,
        fecha_vuelta date,
        imagen varchar(15),
        descripcion text,
        disponibles int,
        slug varchar(20)
        );
    
        INSERT INTO viajes (titulo, precio, fecha_ida, fecha_vuelta, imagen, descripcion, disponibles, slug)
        VALUES 
        ('Italia', 50000, '2021-06-24', '2021-06-30', 'roma', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. Sed eget tellus eu mauris faucibus pharetra. Praesent vulputate diam ac diam dignissim, eu semper turpis gravida. Vestibulum tempor purus orci, vitae ullamcorper erat congue quis. Nullam dapibus dui a velit lacinia, eu cursus massa cursus. Morbi lobortis fermentum urna, quis tincidunt justo varius vitae. In justo nisl, auctor vel eros sed, tempus efficitur lacus. Maecenas volutpat pharetra dolor, nec rutrum ipsum dapibus id. Mauris ultricies augue lectus, efficitur tincidunt enim euismod non. Praesent nisl elit, eleifend et eleifend eu, venenatis et felis. Donec eleifend mi in congue semper. Quisque hendrerit purus eget pharetra laoreet. Donec nisl nisi, auctor at vehicula et, fermentum sed urna. In nec porta felis, eu ullamcorper lacus. Curabitur scelerisque commodo laoreet. Donec finibus vel nibh quis ultrices. Integer varius tellus sed leo tempor, vitae ullamcorper leo placerat.', 32, 'viaje-italia'),
        ('Canada', 60000, '2021-07-19', '2021-07-19', 'canada', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. Sed eget tellus eu mauris faucibus pharetra. Praesent vulputate diam ac diam dignissim, eu semper turpis gravida. Vestibulum tempor purus orci, vitae ullamcorper erat congue quis. Nullam dapibus dui a velit lacinia, eu cursus massa cursus. Morbi lobortis fermentum urna, quis tincidunt justo varius vitae. In justo nisl, auctor vel eros sed, tempus efficitur lacus. Maecenas volutpat pharetra dolor, nec rutrum ipsum dapibus id. Mauris ultricies augue lectus, efficitur tincidunt enim euismod non. Praesent nisl elit, eleifend et eleifend eu, venenatis et felis. Donec eleifend mi in congue semper. Quisque hendrerit purus eget pharetra laoreet. Donec nisl nisi, auctor at vehicula et, fermentum sed urna. In nec porta felis, eu ullamcorper lacus. Curabitur scelerisque commodo laoreet. Donec finibus vel nibh quis ultrices. Integer varius tellus sed leo tempor, vitae ullamcorper leo placerat.', 25, 'viaje-canada'),
        ('Grecia', 40000, '2021-08-29', '2021-09-15', 'grecia', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. Sed eget tellus eu mauris faucibus pharetra. Praesent vulputate diam ac diam dignissim, eu semper turpis gravida. Vestibulum tempor purus orci, vitae ullamcorper erat congue quis. Nullam dapibus dui a velit lacinia, eu cursus massa cursus. Morbi lobortis fermentum urna, quis tincidunt justo varius vitae. In justo nisl, auctor vel eros sed, tempus efficitur lacus. Maecenas volutpat pharetra dolor, nec rutrum ipsum dapibus id. Mauris ultricies augue lectus, efficitur tincidunt enim euismod non. Praesent nisl elit, eleifend et eleifend eu, venenatis et felis. Donec eleifend mi in congue semper. Quisque hendrerit purus eget pharetra laoreet. Donec nisl nisi, auctor at vehicula et, fermentum sed urna. In nec porta felis, eu ullamcorper lacus. Curabitur scelerisque commodo laoreet. Donec finibus vel nibh quis ultrices. Integer varius tellus sed leo tempor, vitae ullamcorper leo placerat.', 18, 'viaje-grecia'),
        ('Inglaterra', 8000, '2021-09-22', '2021-10-03', 'londres', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. Sed eget tellus eu mauris faucibus pharetra. Praesent vulputate diam ac diam dignissim, eu semper turpis gravida. Vestibulum tempor purus orci, vitae ullamcorper erat congue quis. Nullam dapibus dui a velit lacinia, eu cursus massa cursus. Morbi lobortis fermentum urna, quis tincidunt justo varius vitae. In justo nisl, auctor vel eros sed, tempus efficitur lacus. Maecenas volutpat pharetra dolor, nec rutrum ipsum dapibus id. Mauris ultricies augue lectus, efficitur tincidunt enim euismod non. Praesent nisl elit, eleifend et eleifend eu, venenatis et felis. Donec eleifend mi in congue semper. Quisque hendrerit purus eget pharetra laoreet. Donec nisl nisi, auctor at vehicula et, fermentum sed urna. In nec porta felis, eu ullamcorper lacus. Curabitur scelerisque commodo laoreet. Donec finibus vel nibh quis ultrices. Integer varius tellus sed leo tempor, vitae ullamcorper leo placerat.', 22, 'viaje-inglaterra'),
        ('Rio de Janeiro', 50000, '2021-04-16', '2021-04-25', 'rio', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. Sed eget tellus eu mauris faucibus pharetra. Praesent vulputate diam ac diam dignissim, eu semper turpis gravida. Vestibulum tempor purus orci, vitae ullamcorper erat congue quis. Nullam dapibus dui a velit lacinia, eu cursus massa cursus. Morbi lobortis fermentum urna, quis tincidunt justo varius vitae. In justo nisl, auctor vel eros sed, tempus efficitur lacus. Maecenas volutpat pharetra dolor, nec rutrum ipsum dapibus id. Mauris ultricies augue lectus, efficitur tincidunt enim euismod non. Praesent nisl elit, eleifend et eleifend eu, venenatis et felis. Donec eleifend mi in congue semper. Quisque hendrerit purus eget pharetra laoreet. Donec nisl nisi, auctor at vehicula et, fermentum sed urna. In nec porta felis, eu ullamcorper lacus. Curabitur scelerisque commodo laoreet. Donec finibus vel nibh quis ultrices. Integer varius tellus sed leo tempor, vitae ullamcorper leo placerat.', 23, 'viaje-rio-de-janeiro'),
        ('Francia', 75000, '2021-04-03', '2021-04-10', 'paris', 'Praesent tincidunt ante at justo semper volutpat. Sed risus neque, scelerisque id dictum in, placerat non erat. Sed eget tellus eu mauris faucibus pharetra. Praesent vulputate diam ac diam dignissim, eu semper turpis gravida. Vestibulum tempor purus orci, vitae ullamcorper erat congue quis. Nullam dapibus dui a velit lacinia, eu cursus massa cursus. Morbi lobortis fermentum urna, quis tincidunt justo varius vitae. In justo nisl, auctor vel eros sed, tempus efficitur lacus. Maecenas volutpat pharetra dolor, nec rutrum ipsum dapibus id. Mauris ultricies augue lectus, efficitur tincidunt enim euismod non. Praesent nisl elit, eleifend et eleifend eu, venenatis et felis. Donec eleifend mi in congue semper. Quisque hendrerit purus eget pharetra laoreet. Donec nisl nisi, auctor at vehicula et, fermentum sed urna. In nec porta felis, eu ullamcorper lacus. Curabitur scelerisque commodo laoreet. Donec finibus vel nibh quis ultrices. Integer varius tellus sed leo tempor, vitae ullamcorper leo placerat.', 14, 'viaje-francia');


6. Carpeta de configuracion y la configuracion de Sequelize con la base de datos en posgres
    
    Al configurar la base de datos pide:


        const db = new Sequelize('nombre de la base de datos', 'usuario agregado en la base de datos', 'contraseña', {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',...

7. Crea variables de entorno en un archivo .env donde lo omitas con gitignore y eso ayudara a no tener vulnervilidades en el codigo 

8. Conectar a una base de datos en linea en este caso filess.io 

9. configurar para subirlo a git o un servidor 
    - poner puerto en el archivo [index.js](index.js)
    
    `const port = process.env.PORT || 4000;`

    - poner comando a ejecutar en  [package.json](package.json) 
    
    `"start": "node index.js"`
