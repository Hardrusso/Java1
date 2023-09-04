// Tipos de Datos

// string o cadena de texto
const producto = "Monitor de 20 pulgadas";

// string con constructor completo

const producto1 = String("Monitor HD");

// string con constructor completo moderno queda como tipo objeto

const producto2 = new String("Monitor de 30 Pulgadas");

console.log(producto);
console.log(producto1);
console.log(producto2);

// cadena de texto
const tweet = 'Jonathan Caro Espinosa El MEJOR Programador';
const tweet1 = 'Creeloo'

console.log(tweet.length);
console.log(tweet1);

// Indexof --> buscar una palabra dentro de una funcion, creando asi un metodo
// Retorna una posicion
console.log(tweet.indexOf('Jonathan'));
console.log(producto.indexOf('Tablet'));

// Include 
// Retorna true o false
console.log(tweet.includes('Jonathan'));
console.log(producto.includes('Tablet'));