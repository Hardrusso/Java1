// Classes

class Producto {
    constructor (nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        if(disponible <1){ //si las existencias es menor a 1, no hay existencias, 
            this.disponible = false; // Marca booleano como false
        }else{
            this.disponible =  true; 
        }
        this.stock = disponible;
    }
    formatearProducto(){
        return `El producto ${this.nombre}`;
    }
    formatearprecio(){
        return `tiene un precio de $ ${this.precio},`;
    }
    formatearProducto1(){
        return `tiene en stock estas existencias: ${this.stock}, por lo tanto su disponibilidad es ${this.disponible}`;
    }
    
}

class Cliente {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad =  edad;
    }
    formatearCliente(){
        return   `El cliente ${this.nombre} ${this.apellido} tiene una edad de: ${this.edad}`
    }
}

const producto2 = new Producto('monitor curvo 42"', 800, 5);
const producto3 = new Producto('Laptop', 300, 2);
const producto4 = new Producto('Agenda electronica', 100, 0);
const cliente = new Cliente('Jonathan','The Best Programer',38);

console.log(producto2.formatearProducto());
console.log(producto2.formatearprecio());
console.log(producto2.formatearProducto1());
console.log(producto3.formatearProducto());
console.log(producto3.formatearprecio());
console.log(producto3.formatearProducto1());
console.log(producto4.formatearProducto());
console.log(producto4.formatearprecio());
console.log(producto4.formatearProducto1());

console.log(cliente.formatearCliente());

// HERENCIA
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} ${super.formatearprecio()} y su codigo isbn es ${this.isbn}`
    }
}

const libro = new Libro('Jonathan Caro - The best Programer',800,'654464144846');

console.log(libro.formatearProducto());