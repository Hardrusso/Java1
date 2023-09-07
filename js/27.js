// POO => PROGRAMACION ORIENTADA A OBJETOS

// Object Literal - nosotros le colocamos los valores a los elementos
const producto = {
    nombre: 'table',
    precio: 500,
}
console.log(producto);

// Object Constructor

function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    
    if(disponible === 'disponible'){ // si disponible es exactamente igual al valor disponible del producto
        this.disponible = true; // entonces guarde el valor del elemento disponible y coloque true
    }else{
        this.disponible =  false;   // si no, coloque false
    }
}

const producto2 = new Producto('monitor curvo 42"', 800, 'disponible');
const producto3 = new Producto('Laptop', 300, 'disponible');
const producto4 = new Producto('Agenda electronica', 100, 'No disponible');

function formatearProducto(){
    return ``
}


console.log(producto2);
console.log(producto3);
console.log(producto4);
