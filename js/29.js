// Try Catch

const numero1 = 10;
const numero3 = 20;

// Se tienenn dos constantes, numero1 y numero3, al ver en consola, solicitamos ver las constantes numero1, numero2 y numero3, pero la const numero 2 no esta definida
// esto inmediatamente me muestra el error y para la ejecucion de la aplicacion

// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

// para que no pare la ejecucion de la aplicacion, usamos try catch

console.log(numero1);

try {  // Se encarga de intentar algo
    console.log(numero2);
}catch (error) { // si no puede muestra el error
    console.log(error);
}

console.log(numero3);

// no se debe usar para todo, solo donde se requiere que nos muestre el error y la aplicacion siga ejecutandose
