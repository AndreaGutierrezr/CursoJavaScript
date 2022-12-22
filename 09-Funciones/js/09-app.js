//Métodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(name){
        console.log(`Creando la playlist de ${name}`);
    },
    reproducirPlaylist: function(name){
        console.log(`Reproduciendo la playlist ${name}`);
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