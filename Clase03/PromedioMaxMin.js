let readlineSync = require ('readline-sync');

let numero;
let numeroMax;
let numeroMin;
let cantidadTotal=0;
let suma=0;

while (numero!=0){
    numero = readlineSync.questionInt ("Ingrese un numero:");
    if (numero !=0){
        if (numeroMax == undefined || numero>numeroMax) {
            numeroMax = numero
            
        }
        if (numeroMin == undefined || numero<numeroMin) {
            numeroMin = numero
        }
        suma = numero + suma
        cantidadTotal = cantidadTotal + 1
    }
}

console.log ("Cantidad de numeros ingresados:", cantidadTotal);

console.log ("El numero máximo es:", numeroMax);
console.log ("El numero mínimo es:", numeroMin);
console.log ("El promedio de los numeros ingresados es:", suma/cantidadTotal);