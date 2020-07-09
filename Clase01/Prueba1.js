let readlineSync = require ('readline-sync');
let numero1 = readlineSync.questionInt("Ingrese el primer numero:");
console.log ("El primer numero es:", numero1);
let numero2 = readlineSync.questionInt("Ingrese el segundo numero:");
console.log ("El segundo numero es:", numero2);
let resultado = (numero1 + numero2);
console.log ("El resultado de la suma es:", resultado);
