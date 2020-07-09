let readlineSync = require('readline-sync');

let numero;
let numeroMin;


while (numero!=0){
    numero = readlineSync.questionInt ("Introduzca un número:");
    if (numeroMin == undefined || (numero!=0 &&numero<numeroMin)) {
        numeroMin = numero;
    }
}
console.log ("El menor de los numeros es:", numeroMin);

