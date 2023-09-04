const producto = {
    nombreProducto : 'Monitor 20 pulgada',
    precio : 300,
    disponible : true,
}

const medidas = {
    peso : '1 kg',
    medidas : '1m',
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);