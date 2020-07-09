// let readlineSync = require('readline-sync');

// let numero1 = readlineSync.questionInt("Ingrese el primer valor:");
// let numero2 = readlineSync.questionInt("Ingrese el segundo valor:");
// let operacion = readlineSync.questionInt("Ingrese 1 para sumar o 2 para restar los numeros:");
// let resultado;
// let linea;

// if (operacion==1) {
//     linea = "-";
//     for (i=0; i<=40; i++) {
//         linea = linea + "-";
//     }
//     console.log (linea);
//     resultado = numero1 + numero2;
//     console.log ("El resultado es: ", resultado);
//     linea = "-";
//     for (i=0; i<=40; i++) {
//         linea = linea + "-";
//     }
//     console.log (linea);
// } else {
//     linea = "-";
//     for (i=0; i<=40; i++) {
//         linea = linea + "-";
//     }
//     console.log (linea);
//     resultado = numero1 - numero2;
//     console.log ("El resultado es: ", resultado);
//     linea = "-";
//     for (i=0; i<=40; i++) {
//         linea = linea + "-";
//     }
//     console.log (linea);
// }

//////////////////////////////////////////////////////////////////
let readlineSync = require('readline-sync');

let numero1 = readlineSync.questionInt("Ingrese el primer valor:");
let numero2 = readlineSync.questionInt("Ingrese el segundo valor:");
let operacion = readlineSync.questionInt("Ingrese 1 para sumar o 2 para restar los numeros:");
let resultado;
let linea;

function dibujarGuionesN(n) {
    let i;
    let linea = "-";
    for (i=1; i<=n; i++) {
    linea = linea + "-";
    };
    console.log (linea);
}

if (operacion ==1) {
    resultado = numero1 + numero2;
    dibujarGuionesN(100);
    console.log ("El resultado es: ", resultado);
    dibujarGuionesN(100);
} else if (operacion ==2) {
    resultado = numero1 - numero2;
    dibujarGuionesN(50);
    console.log ("El resultado es: ", resultado);
    dibujarGuionesN(50);
}

