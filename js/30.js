// Promises => promesas
// Promises solo pueden existir tres valores:
// 1. Pending: No se ha cumplido, pero tampoco se ha rechazado
// 2. Fulfilled: Se cumplío
// 3. Rejected: Se rechazo porque no  se pudo cumplir

const usuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve ('Usuario Autenticado'); // Promise se cumple
    }else{
        reject ('No puede iniciar Sesión'); // Promise NO se cumple 
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado)) // Si promise se cumple (resolve) toma el valor del metodo y lo incluye en el valor de la funcion resultado
    .catch( error => console.log(error)) // Si promise NO se cumple (reject) toma el valor del metodo y lo incluye en el valor de la funcion error



