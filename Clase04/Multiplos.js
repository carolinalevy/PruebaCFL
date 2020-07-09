let readlineSync = require('readline-sync');

let esMultiplo = (valor1,valor2) => {
    let resto = valor2%valor1;
    if (resto==0) {
        return true
    } else {
        return false
    }
}

let valor1 = readlineSync.question ("Indique un valor para saber si es multiplo del valor2: ");
let valor2 = readlineSync.question ("Indique el valor2: ");

console.log ("El valor1 es multiplo del valor2: ", esMultiplo(valor1,valor2));