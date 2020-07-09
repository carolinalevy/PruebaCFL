let readlineSync = require('readline-sync');

let numero = readlineSync.questionInt ("Ingrese un número:");
let hastaNumero = readlineSync.questionInt ("Ingrese hasta que número:");
let contador;


for (contador=1; contador<=hastaNumero; contador++){
    resultado = numero * contador
    console.log (numero, "x", contador,("="), resultado);
}
