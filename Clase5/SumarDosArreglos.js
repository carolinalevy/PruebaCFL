let readlineSync = require('readline-sync');

let arreglo1 = new Array(6);
let arreglo2 = new Array(6);
let arregloSuma = new Array(6);

let indice;
let numeros1;
let numeros2;

for (indice=0; indice<6; indice++) {
    numeros1 = readlineSync.questionInt (`Ingrese el numero del Arreglo1 para la posicion ${indice}: `);
    arreglo1[indice] = numeros1;
    numeros2 = readlineSync.questionInt (`Ingrese el numero del Arreglo2 para la posicion ${indice}: `);
    arreglo2[indice] = numeros2;
}

let suma;

for (indice=0; indice<6; indice++) {
    arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
}

for (indice=0; indice<6; indice++) {
    console.log (`La suma de ${arreglo1[indice]} + ${arreglo2[indice]} en posicion indice es: ${arregloSuma[indice]}`);
}