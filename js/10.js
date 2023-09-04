// Objetos ** IMPORTANTE **

const producto = {
    nombreProducto : 'Monitor 20 pulgada',
    precio : 300,
    disponible : true,
}

// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);
// console.log(producto['precio'])

//Agregar nuevas propiedades del objeto
producto.imagen = 'imgaen.jpg';

// Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);