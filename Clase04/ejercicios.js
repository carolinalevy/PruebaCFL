let readlineSync = require('readline-sync');

let numero = readlineSync.questionInt(`Ingrese el numero: `);

let esMultiplo = (valor1,valor2) => {
    let resto = valor2%valor1;
    if (resto==0) {
        return true
    } else {
        return false
    }
}
let cantidadDeDivisores = (numero) => {
    let indice;
    let cantidadDivisores=0;
    for (indice=0; indice<=numero; indice++) {
        if (esMultiplo (indice,numero)== true) {
            cantidadDivisores= cantidadDivisores+1;
        }
    }
    return cantidadDivisores;
}

console.log(`El numero de divisores de ${numero} es ${cantidadDeDivisores(numero)}. `);