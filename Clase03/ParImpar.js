let readlineSync = require('readline-sync');

let numero=0;

while (numero==0) {
    numero = readlineSync.questionInt ("Ingrese un numero distinto a 0:");
}
if (numero%2==0) {
    console.log ("El número ingresado es PAR");
} else {
    console.log ("El número ingresado es IMPAR");
}