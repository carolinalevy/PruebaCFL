let readlineSync = require('readline-sync');

let calcularPotencia = (base, exponente) => {
    let contador;
    let potencia =1;
    for (contador=1; contador<=exponente; contador++) {
        potencia = potencia * base
    }
    return potencia
} 

let base;
let exponente;

base = readlineSync.questionInt("Ingrese la base:");
exponente = readlineSync.questionInt("Ingrese el exponente:");
if (exponente>=0) {
    console.log ("La potencia es:", calcularPotencia(base,exponente));
} else {
    console.log ("Ingrese un exponente mayor o igual a 0.");

}

