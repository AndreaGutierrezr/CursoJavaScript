//Métodos de propiedad
const reproductor = {
    cancion: '',
    reproducir: id => {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: () => {
        console.log('Pausando...');
    },
    crearPlaylist: function(name){
        console.log(`Creando la playlist de ${name}`);
    },
    reproducirPlaylist: function(name){
        console.log(`Reproduciendo la playlist ${name}`);
    },

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();

//AGREGAR MÁS MÉTODOS COMO PROPIEDAD
reproductor.borrar = function(id){
    console.log(`Borrando canción ${id}`);
}
reproductor.borrar(15);
reproductor.crearPlaylist('Chida');
reproductor.reproducirPlaylist('Fiesta');

reproductor.nuevaCancion = 'Enter Sandman';
//como utiliza un get no es necesario el parentesis
reproductor.obtenerCancion;