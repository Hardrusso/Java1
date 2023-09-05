const metodoPago = 'cheque';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
    case 'cheque':
        console.log('El usuario cancelo con cheque, estamos validando fondos');
        break;
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break;
    default:
        console.log('Aún no has pagado')
        break
}