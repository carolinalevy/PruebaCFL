let readlineSync = require('readline-sync');

let nombresArreglo = new Array (2);

let numerosArreglo = new Array (3);

let indice;
let nombres;
for (indice=0; indice<2; indice++) {
    nombres = readlineSync.question(`Ingrese el nombre del arreglo en la posicion ${indice}: `);
    nombresArreglo[indice] = nombres;
}

for (indice=0; indice<2; indice++) {
    console.log (`Los nombres del arreglo son : ${nombresArreglo[indice]}`);
}

let numeros;
for (indice=0; indice<3; indice++) {
    numeros= readlineSync.questionInt (`Ingrese el numero del arreglo en la posicion ${indice}: `);
    numerosArreglo[indice] = numeros;
}

for (indice=0; indice<3; indice++) {
    console.log (`Los numeros del arreglo son : ${numerosArreglo[indice]}`);
}

