// ARRAYS

const numeros = [10,20,30,40,50];

console.log(numeros);





// Acceder a los valores de un arreglo

// console.log(numeros[3]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[1000]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

numeros.push(60, 70, 80); // .push = agrega al fnal del arreglo datos nuevos

numeros.unshift(-10,-20,-30); // .unshift = Agrega al inicio del arreglo datos nuevos

console.table(numeros);


const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo']

//meses.pop(); // Elimina el dato al final del arreglo
// meses.shift(); // Elimina el dato al inicio del arreglo

// meses.splice(2,1); // .splice= elimina el dato que se indique del arreglo, primer componente es la posicion del array, segundo, cuantos elementos desde esa posicion pienso eliminar

console.log(meses);
console.table(meses);

// Rest Operator or Spread Operator

const nuevoArreglo = [...meses, 'junio']; //agrega al final
const nuevoArreglo1 = ['diciembre', ...nuevoArreglo] 
console.table(nuevoArreglo1);