"use strict";
exports.__esModule = true;
var readlineSync = require("./node_modules/readline-sync");
var arrayNombres = [];
function cargarArray() {
    var nombresArray = readlineSync.question("Ingrese nombres en el arreglo, finalice con (F): ");
    while (nombresArray != "F") {
        arrayNombres.push(nombresArray);
        nombresArray = readlineSync.question("Ingrese nombres en el arreglo, finalice con (F): ");
    }
    return arrayNombres;
}
function insertarNombre() {
    var insertar = readlineSync.question("Ingrese un nombre y (.) para finalizar: ");
    while (insertar != ".") {
        arrayNombres.push(insertar);
        insertar = readlineSync.question("Ingrese un nombre y (.) para finalizar: ");
    }
}
function buscarNombre(arrayNombres) {
    var buscar = readlineSync.question("Ingrese la palabra que desea buscar y (.) para finalizar: ");
    var i;
    for (i = 0; i < arrayNombres.length; i++) {
        if (buscar == arrayNombres[i]) {
            console.log("El nombre que buscas esta dentro del arreglo.");
            return i;
        }
    }
    return -1;
}
function eliminarNombre(arrayNombres) {
    var posicion = buscarNombre(arrayNombres);
    if (posicion >= 0) {
        arrayNombres.splice(posicion, 1);
    }
    console.log("El nombre fue eliminado.");
    return arrayNombres;
}
// function actualizarNombre(opcion: string): void {
// }
console.log(cargarArray());
var opcion = readlineSync.question("Ingrese su opcion (I) para Insertar, (E) para eliminar, (B) para buscar o (A) para actualizar: ");
if (opcion == "I") {
    insertarNombre();
    console.log(arrayNombres);
}
else if (opcion == "B") {
    console.log(buscarNombre(arrayNombres));
}
else if (opcion == "E") {
    console.log(eliminarNombre(arrayNombres));
}
else {
    console.log("La opción ingresada es incorrecta. Ingrese su opción.");
}
