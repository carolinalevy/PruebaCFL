let readlineSync = require ('readline-sync');

let dimension = readlineSync.questionInt (`Ingrese la dimension del arreglo: `);
let array = new Array(dimension);

let indice;
let numeros;
for (indice=0; indice<dimension; indice++) {
    numeros = readlineSync.questionInt(`Ingrese el numero para la posicion ${indice} del arreglo: `);
    array[indice] = numeros;
}

let numerosPositivos =0;
let numerosNegativos =0;
let numerosCero =0;
for (indice=0; indice<dimension; indice++) {
    if (array[indice]>0) {
        numerosPositivos = numerosPositivos +1;
    }
    if (array[indice]<0) {
        numerosNegativos = numerosNegativos +1;
    }
    if (array[indice]==0) {
        numerosCero = numerosCero +1;
    }
}
console.log(`positivos ${numerosPositivos}`);
console.log(`negativos ${numerosNegativos}`);
console.log(`ceros ${numerosCero}`);