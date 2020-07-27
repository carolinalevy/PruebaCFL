"use strict";
exports.__esModule = true;
var fs = require("fs");
var nombres = fs.readFileSync("nombres.txt", "utf8");
var escuelas = fs.readFileSync("escuelas.txt", "utf8");
var arrayNombres = nombres.split(" ");
console.log(arrayNombres);
var arrayEscuelas = escuelas.split(" ");
console.log(arrayEscuelas);
function ordenarVotantes(arrayNombres, arrayEscuelas) {
    arrayNombres.sort();
    var cantidadVotantesPorEscuela = Math.ceil(arrayNombres.length / arrayEscuelas.length);
    console.log(cantidadVotantesPorEscuela);
    var escuelaActual = 0;
    var personasActual = 0;
    for (var i = 0; i < arrayNombres.length; i++) {
        if (personasActual < cantidadVotantesPorEscuela) {
            personasActual = personasActual + 1;
        }
        else {
            escuelaActual = escuelaActual + 1;
            personasActual = 1;
        }
        console.log("A " + arrayNombres[i] + " le corresponde votar en la " + arrayEscuelas[escuelaActual]);
    }
}
ordenarVotantes(arrayNombres, arrayEscuelas);
