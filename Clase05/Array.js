let readlineSync = require('readline-sync');

let dimension = readlineSync.questionInt ("Ingrese la dimension del arreglo:");
let numerosArreglo = new Array(dimension);

for (let indice=0; indice < dimension; indice ++) {
     numerosArreglo [indice] = readlineSync.question ("Ingrese los valores del arreglo: ", [indice]); 
}

console.log (numerosArreglo[indice]);

