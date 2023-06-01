const reproductor = {
    cancion: '',
    reproducir: id => `Reproduciendo cancion ${id}`,
    pausar: () => 'Pausando......',
    eliminar: id => `Eliminando cancion con el id: ${id}`,
    playlist: {
        crear: () => 'Creando playist con tu top de canciones mas ecuchadas....',
        reproducir: () => 'Repruciendo playlist creada'
    },
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo esta cancion ${cancion}`);
    },

    get agregaCancion(){
        console.log(`${this.cancion}`);
    }
}
reproductor.nuevaCancion = 'Mi rosa negra';
reproductor.agregaCancion;

console.log(reproductor.reproducir(11));
console.log(reproductor.pausar());
console.log(reproductor.eliminar(10));
console.log(reproductor.playlist.crear());
console.log(reproductor.playlist.reproducir());