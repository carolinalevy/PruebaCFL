let readlineSync = require('readline-sync');

let dimension = readlineSync.questionInt (`Ingrese la dimension del arreglo: `);
let array = new Array(dimension);

let indice, numeroArreglo;
for (indice=0; indice<dimension; indice++) {
    numeroArreglo = readlineSync.questionInt(`Ingrese el numero en la posicion ${indice} del arreglo: `);
    array[indice] = numeroArreglo;
}

let numerosPositivos =0;
let numerosNegativos =0;
let numerosCeros =0;
for (indice=0; indice<dimension; indice++) {
    if (array[indice] >0) {
        numerosPositivos = numerosPositivos +1;
    }
    if (array[indice] ==0) {
        numerosCeros = numerosCeros +1;
    }
    if (array[indice] <0) {
        numerosNegativos = numerosNegativos +1;
    }
}

console.log (`La cantidad de numeros positivos es: ${numerosPositivos}`);
console.log (`La cantidad de numeros ceros es: ${numerosCeros}`);
console.log (`La cantidad de numeros negativos es: ${numerosNegativos}`);
