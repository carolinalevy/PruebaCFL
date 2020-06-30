let readlineSync = require('readline-sync');

let dimensionArreglo = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let nombresPersonas = new Array (dimensionArreglo);

let nombre;
let indice;

for (indice=0; indice<nombresPersonas.length; indice++) {
    nombre = readlineSync.question(`Para la posicion ${indice} ingrese el nombre: `);
    nombresPersonas[indice] = nombre;
}

for (indice=0; indice<dimensionArreglo; indice++) {
    console.log (`El nombre de la persona en la posicion ${indice} es: ${nombresPersonas[indice]} `);
}