"use strict";
exports.__esModule = true;
var readlineSync = require("./node_modules/readline-sync");
function ejemplo3(nombre) {
    return "hola, como estas " + nombre + "?";
}
var nombre;
nombre = readlineSync.question("Ingrese su nombre aqui: ");
console.log(ejemplo3(nombre));
