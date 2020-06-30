let readlineSync = require('readline-sync');

let dimensionArreglo = readlineSync.questionInt ('Ingrese la dimension del arreglo:');
let arreglo = new Array (dimensionArreglo);

let indice;
let elementosArreglo;

for (indice=0; indice< dimensionArreglo; indice ++) {
    elementosArreglo = readlineSync.questionInt(`Ingrese el elemento del arreglo en la posicion ${indice} :`);
    arreglo[indice] = elementosArreglo;
}

let suma =0;
for (indice=0; indice< dimensionArreglo; indice++) {
    suma = suma + arreglo[indice];
}

for (indice=0; indice<dimensionArreglo; indice++) {
    console.log (`El elemento en la posicion ${indice} del arreglo es: ${arreglo[indice]}`);
}

console.log (`La suma de los elementos del arreglo es: ${suma}`);