let readlineSync = require('readline-sync');

let numero;
let numeroMax;

numero = readlineSync.questionInt ("Introduzca un número:");
numeroMax = numero;
while (numero!=0){
    if (numero>numeroMax) {
        numeroMax = numero;
    }
    numero = readlineSync.questionInt ("Introduzca un número:");

}
console.log ("El mayor de los numeros es:", numeroMax);

