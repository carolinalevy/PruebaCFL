let readlineSync = require ('readline-sync');
let vuelta1 = readlineSync.questionFloat("Ingrese el tiempo de la Vuelta 1:");
console.log ("Tiempo de la vuelta 1:", vuelta1);
let vuelta2 = readlineSync.questionFloat("Ingrese el tiempo de la Vuelta 2:");
console.log ("Tiempo de la vuelta 2:", vuelta2);
let vuelta3 = readlineSync.questionFloat("Ingrese el tiempo de la Vuelta 3:");
console.log ("Tiempo de la vuelta 3:", vuelta3);
let vuelta4 = readlineSync.questionFloat("Ingrese el tiempo de la Vuelta 4:");
console.log ("Tiempo de la vuelta 4:", vuelta4);
let tiempoTotal = (vuelta1 + vuelta2 + vuelta3 + vuelta4);
console.log ("El tiempo total es:", tiempoTotal);
let promedioVueltas = (tiempoTotal/4);
console.log ("El tiempo promedio de vueltas es:", promedioVueltas)
