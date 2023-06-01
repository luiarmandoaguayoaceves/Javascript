const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar: function(){
        console.log('Pausando......');
    },
    eliminar: function(id){
        console.log(`Eliminando cancion con el id: ${id}`);
    },
    playlist: {
        crear: function(){
        console.log('Creando playist con tu top de canciones mas ecuchadas....');
        },
        reproducir: function(){
            console.log('Repruciendo playlist creada')
        }
    }
}

reproductor.reproducir(11);
reproductor.pausar();
reproductor.eliminar(10);
reproductor.playlist.crear();
reproductor.playlist.reproducir();