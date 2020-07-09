let esMultiplo = (valor1,valor2) => {
    let resto = valor2%valor1;
    if (resto==0) {
        return true
    } else {
        return false
    }
}

let readlineSync = require('readline-sync');

let cantidadDeDivisores = (numero) => {
    let divisores = 0;
    for (let contador=1; contador<=numero; contador++) {
        //let multiplo = esMultiplo(contador,numero);
        if (esMultiplo(contador,numero)==true) {
            divisores = divisores+1
        }
    }
    return divisores
}

let numero = readlineSync.questionInt ("Ingrese un numero entero:");
console.log("La cantidad de divisores para", numero, "es", cantidadDeDivisores(numero));