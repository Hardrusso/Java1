//'use strict' // Correr JS en modo estricto
//Objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgada',
    precio : 300,
    disponible : true,
}

Object.freeze(producto); // .freeze: No permite agregar, elimina o modificar el objeto

producto.imagen = 'imagen.pdf';

console.log(producto);

console.log(Object.isFrozen(producto));

const producto1 = {
    nombreProducto1 : 'Monitor 20 pulgada',
    precio1 : 300,
    disponible1 : true,
}

Object.seal(producto1); // .seal: No permite agregar o eliminar objetos, pero si permite modificarlos

producto1.precio1 = "Cambie el precio a 500";

console.log(producto1);