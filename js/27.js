// POO => PROGRAMACION ORIENTADA A OBJETOS

// Object Literal - nosotros le colocamos los valores a los elementos
const producto = {
    nombre: 'table',
    precio: 500,
}
console.log(producto);

// Object Constructor
function Cliente (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
// Prototype Crear funciones para un Objeto en especifico
Cliente.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre} ${this.apellido}, tiene una edad de ${this.edad}`;
}

function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    
    if(disponible <1){ //si las existencias es menor a 1, no hay existencias, 
        this.disponible = false; // Marca booleano como false
    }else{
        this.disponible =  true; 
    }
    this.stock = disponible;
}
// Prototype Crear funciones para un Objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}, hay en stock ${this.disponible} estas existencias ${this.stock}`;
}

const producto2 = new Producto('monitor curvo 42"', 800, 5);
const producto3 = new Producto('Laptop', 300, 2);
const producto4 = new Producto('Agenda electronica', 100, 0);
const cliente = new Cliente('Jonathan','Caro',38)
const cliente2 = new Cliente('Eduar','Cruz',25)

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());


console.log(cliente);
console.log(cliente.formatearCliente());
console.log(cliente2.formatearCliente());
