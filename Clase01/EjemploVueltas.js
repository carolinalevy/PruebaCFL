let readlineSync = require('readline-sync');
let vuelta1 =readlineSync.questionInt("Ingrese la vuelta 1:");
let vuelta2 =readlineSync.questionInt("Ingrese la vuelta 2:");
let vuelta3 =readlineSync.questionInt("Ingrese la vuelta 3:");
let vuelta4 =readlineSync.questionInt("Ingrese la vuelta 4:");
let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("Tiempo Total:", tiempoTotal);
console.log ("Promedio de vuelta:", tiempoTotal/4);
