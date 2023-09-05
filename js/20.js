// Metodos de Propiedad

const reproductor = { // Tengo un objeto que se llama reproductor
    reproducir : function (id) { // dentro del objeto que se llama reproductor, tengo la función reproducir, con un argumento id
        console.log(`Reproduciendo Canción con el ID: ${id}`) // imprimir en la consola el mensaje con el argumento de la función
    },
    pausar : function(){
        console.log(`Pausando...`)
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

console.table(reproductor);

reproductor.reproducir(3840); // Llamo a la funcion reproducir con el id 3840 para que me imprima en la consola
reproductor.pausar();
reproductor.borrarCancion(5568);
reproductor.crearPlayList('Merengue');
reproductor.reproducirPlayList('Merengue');
