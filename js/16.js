// funciones = codigo ordenado y facil de mantener

// Declaracion de la función

function sumar() {
    console.log(10 + 3);
}
sumar();

// Expresion de la función

const sumar2 = function () {
    console.log(20 + 3);
}

sumar2();

// IIFE

(function() {
    console.log('esto es una funcion')
}) ();