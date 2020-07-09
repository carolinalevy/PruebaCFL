let readlineSync = require('readline-sync');


function calcularResultado (numero1, numero2, operacion) {
    let resultado;
    if (operacion==1) {
        resultado = numero1 + numero2;
        console.log ("El resultado es: ", resultado);
    } else if (operacion==2) {
        resultado = numero1 - numero2;
        console.log ("El resultado es: ", resultado);
    }
    return resultado;
}
function dibujarGuionesN(n) {
    let i;
    let linea = "-";
    for (i=1; i<=n; i++) {
    linea = linea + "-";
    };
    console.log (linea);
}

let resultado = calcularResultado(4,4,1);
dibujarGuionesN(50);
console.log ("El resultado es: ", resultado);
dibujarGuionesN(50);
