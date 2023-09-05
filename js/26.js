// This

const reservacion = {
    nombre: 'Jonathan',
    apellido: 'Caro',
    mensaje: 'el mejor programador',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

const reservacion1 = {
    nombre: 'Jacobo',
    apellido: 'Caro',
    mensaje: 'el mejor programador',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}
reservacion.informacion();
reservacion1.informacion();