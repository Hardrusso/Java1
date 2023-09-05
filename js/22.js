// if

const puntaje = 100;

if(puntaje !== 1000) {
    console.log('no es igual');
}else {
    console.log('si el puntaje es 1000');
}

const efectivo = 1800;
const carrito = 1800;

if(efectivo >= carrito) {
    console.log('su compra puede realizarse');
} else {
    diferencia = carrito - efectivo;
    console.log(`su saldo no alcanza para hacer esta compra, le falta: ${diferencia}`)
};

const rol = 'editor';

if (rol === 'administrador') {
    console.log('Acceso a todo el sistema');
} else if ( rol === 'editor') {
    console.log('Eres editor, acceso restringido a ciertas funciones');
} else {
    console.log('no tiene Acceso');
}