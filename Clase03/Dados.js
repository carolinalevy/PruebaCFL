// let readlineSync = require('readline-sync');

// let numeroDados;
// let posibilidades;

// numeroDados = readlineSync.questionInt("Ingrese el numero de dados:");

// if (numeroDados>=1){
//     posibilidades=6**numeroDados // no me anda con ^, tal como decia en el slide de secuencial.
//                                     // tampoco funciona MOD, si funciona %.

//     console.log ("El numero de posibilidades de que salgan todos 6 es:", "1/", posibilidades);
// }else {
//     console.log ("El numero asignado es invalido.");
// }

let readlineSync = require('readline-sync');

let numeroDados;
let posibilidades=1;
let contador;


numeroDados = readlineSync.questionInt("Ingrese el numero de dados:");
    for (contador=1; contador<=numeroDados; contador++){ 
        posibilidades = posibilidades *6;
    }
    console.log ("El numero de posibilidades de que salgan todos 6 es: 1/", posibilidades);
