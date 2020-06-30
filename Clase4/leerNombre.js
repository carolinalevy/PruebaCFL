let readlineSync = require('readline-sync');

function leerNombreDesdeElTeclado(textoAMostrar) {
    let readlineSync = require('readline-sync');
    return readlineSync.question(textoAMostrar);
}

let nombre = leerNombreDesdeElTeclado("Ingrese Nombre: ");
let apellido = leerNombreDesdeElTeclado("Ingrese Apellido: ");
console.log ("Su nombre completo es: ", nombre, apellido);
