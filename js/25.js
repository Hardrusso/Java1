const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
    {nombre: 'Mouse', precio: 40},
];

// forEach => solo se pueden ejecutar en arreglos

carrito.forEach( producto => console.log(producto.precio));

// map => crea un nuevo arreglo

const arreglo1 = carrito.map( producto => producto.precio);
