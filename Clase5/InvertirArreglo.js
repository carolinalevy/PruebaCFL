let readlineSync = require('readline-sync');

let dimension = readlineSync.questionInt ("Ingrese la dimension del arreglo: ");
let arreglo = new Array (dimension);

let indice, numeros;
for (indice=0; indice<dimension; indice++) {
    numeros = readlineSync.questionInt (`Ingrese el numero del arreglo para la posicion ${[indice]}: `);
    arreglo[indice] = numeros;
}


for (let indice1 = (dimension-1); indice1>=0; indice1--) {
    console.log (arreglo[indice1]);
}
