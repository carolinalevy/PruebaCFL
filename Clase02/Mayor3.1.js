let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt("Escriba un primer número:");
let segundoNumero = readlineSync.questionInt("Escriba un segundo número:");
let tercerNumero = readlineSync.questionInt("Escriba un tercer número:");

if (primerNumero>segundoNumero && primerNumero>tercerNumero){
    console.log ("El primer número es el mayor de los tres.");
}else{
    if (segundoNumero>primerNumero && segundoNumero>tercerNumero){
        console.log ("El segundo número es el mayor de los tres.");
    }else{
        if (tercerNumero>primerNumero && tercerNumero>segundoNumero){
            console.log ("El tercer número es el mayor de los tres.");
        }
    }
}



