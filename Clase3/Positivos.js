let readlineSync = require('readline-sync');

let numero;
let numerosPositivos=0;
let numerosTotales=0;

while (numero !=0) {
    numero = readlineSync.questionInt("Escriba un numero:");
    if (numero!=0) {
        numerosTotales = numerosTotales + 1;
        if (numero>0) {
            numerosPositivos = numerosPositivos + 1;
            
        }
    }

}
console.log (numerosPositivos,"Positivos", (numerosPositivos*100/numerosTotales), "% del total");