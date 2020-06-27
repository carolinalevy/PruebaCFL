let readlineSync = require('readline-sync');

let numero = readlineSync.questionInt("Escriba un número:");
let resto = numero%2

if (numero==0){
    console.log ("Ingresó el número 0");
}else{
    if (resto==0){
        console.log ("El número ingresado es PAR");
    }else {
        console.log ("El número ingresado es IMPAR");
    }
}