let readlineSync = require ('readline-sync');

let sumaMedios=0;
let contador;
let numero1 = readlineSync.questionInt ("Ingrese el primer número:");
let numero2 = readlineSync.questionInt ("Ingrese el segundo número:");

for(contador=numero1;contador<=numero2; contador++){
    sumaMedios = sumaMedios + contador
}
console.log ("La suma de todos los números entre los dos ingresados es:", sumaMedios);
