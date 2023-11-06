
const nombreCache = 'apv-v4';
const archivos = [
    '/47-ServiceWorkers-PWA/',
    '/47-ServiceWorkers-PWA/index.html',
    '/47-ServiceWorkers-PWA/error.html',
    '/47-ServiceWorkers-PWA/css/bootstrap.css',
    '/47-ServiceWorkers-PWA/css/styles.css',
    '/47-ServiceWorkers-PWA/js/app.js',
    '/47-ServiceWorkers-PWA/js/apv.js'
]


//Cuando se instala el service worker solo se ejecuta una sola vez al instalar
self.addEventListener('install', e => {
    console.log('Instalado el service Worker....');
    // console.log(e);

    e.waitUntil(
        caches.open(nombreCache)
            .then(cache  => {
                console.log('cacheando...');
                cache.addAll(archivos);
            })
        )

});

//Activar service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado....');

    // console.log(e);

    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map( key => caches.delete(key)) //Borra la cache o versiones anteriores almacenadas
                )
            })
    )
});

//Evento fetch para decargar archivos estaticos
self.addEventListener('fetch',  e => {
    console.log('Fetch...', e);
    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => (respuestaCache ? respuestaCache : caches.match('/47-ServiceWorkers-PWA/error.html')))
    )
})