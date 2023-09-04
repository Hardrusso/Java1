//Objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgada',
    precio : 300,
    disponible : true,
}

// Forma anterior
// const preciProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(preciProducto);
// console.log(nombreProducto);

// Destructuring Objetos
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
