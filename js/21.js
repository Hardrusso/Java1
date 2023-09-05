// Arrow Functions

const sumar2 = (n1,n2) => console.log(n1 + n2);
sumar2(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JS');

// Array Methods

const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo']

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

// forEach

meses.forEach( (mes) => {
    console.log(mes);
});

meses.forEach( mes1 => {
    if (mes1 == 'Mayo') {
        console.log('este mes de ', mes1, ' si existe');
    }
});

// Some = busca si el elemento esta en el arreglo, ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado);

resultado = carrito.some(producto => producto.nombre === 'Mouse');
console.log(resultado);

// . reduce
resultado = carrito.reduce((total, producto) => {  // .reduce: crea una funcion que tiene dos componentes un acumulador y el valor de cada elemento
return total + producto.precio // el acumulador suma el valor que da el arreglo
}, 0); // inicia en 0
console.log(resultado);

resultado =     carrito.reduce((total,producto) => total + producto.precio, 0);
// variable     arreglo.metodo  acumulador,valor elemento   funcion acumulador + valor por elemento, inicia en 0
console.log(resultado);

// .filter
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Tablet');
console.log(resultado);