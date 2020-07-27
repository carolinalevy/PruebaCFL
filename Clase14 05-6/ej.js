"use strict";
console.log("Paso 1: declarando funciones");
let contador = 0;
function clickear() {
//incrementa el valor de contador
console.log("Paso 3: Valor anterior del contador:" +
contador);
contador++;
console.log("Paso 4: El contador ahora vale:" + contador);
alert("Hiciste " + contador + " clicks")
//es lo mismo que contador = contador + 1
}
console.log("Paso 2: continua ejecución");