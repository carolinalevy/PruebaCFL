let readlineSync = require('readline-sync');

let arregloDeseado = new Array (5);

let numerosArreglo;
let indice;

for (indice=0; indice<5; indice++) {
    numerosArreglo = readlineSync.questionInt (`Ingrese el numero de su arreglo para la posicion ${indice}: `);
    arregloDeseado[indice] = numerosArreglo;
}

for (indice=0; indice<5; indice++) {
    console.log (`El valor del arreglo en la posicion ${indice} es: ${arregloDeseado[indice]}`);
}
