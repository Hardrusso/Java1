// for loop

for ( let i = 0; i < 10; i++) {
    console.log(i);
}

for ( let i = 1; i <=100; i++) {
    if (i % 2 === 0){
        console.log(`El numero ${i} es PAR`)
    } else {
        console.log(`El numero ${i} es IMPAR`)
    }
}

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

for ( let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre )
};

// While loop

let x=0; // indice o valor inicial

while ( x < 10 ) {// condicion
    if (x % 2 === 0) {
        console.log(`El numero ${x} es PAR`);
    }else {
        console.log(`El numero ${x} es IMPAR`);
    }
    x++; // incremento
}


// Do While Loop

let p = 0;

do {
    console.log(p);

    p++;
} while (p < 10);