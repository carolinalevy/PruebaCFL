let readlineSync = require ('readline-sync');

// ///EUREKA///

// let palabraClave;
// let contador=1;

// while (palabraClave!= "Eureka" && contador<=3) {
//     palabraClave = readlineSync.question ("Ingrese la palabra Clave:");
//     if (palabraClave == "Eureka") {
//         console.log ("La palabra clave es CORRECTA.");
//     } else {
//         if (contador == 3) {
//             console.log ("Agoto sus posibilidades.");
//         } else {
//             console.log ("Incorrecto. Intente de nuevo.");
//         }
//     }
// contador = contador +1
// }

/////MULTIPLOS/////

// let contador;

// for (contador=1; contador<=100; contador ++) {
//     if (contador %2==0 || contador%3==0) {
//         console.log ("Es multiplo de 2 o de 3:", contador);
//     }
// }

/////PAR IMPAR/////

// let numero = readlineSync.questionInt ("Ingrese un numero:");

// while (numero==0) {
//     numero = readlineSync.questionInt ("Ingrese un numero distinto de 0:");
// }
// let resto = numero%2
// if (resto==0) {
//     console.log ("El numero ingresado es PAR.");
// } else {
//     console.log ("El numero ingresado es IMPAR.");
// }

/////SUMA ENTRE NUMEROS/////

// let numero1 = readlineSync.questionInt ("Ingrese el numero 1:");
// let numero2 = readlineSync.questionInt ("Ingrese el numero 2:");
// let sumaMedios = 0;
// let contador;

// for (contador=numero1; contador<=numero2; contador++) {
//     sumaMedios = sumaMedios + contador;
// }
// console.log ("La suma de todos los numeros entre los dados es:", sumaMedios);

/////TABLAS DE MULTIPLICACION/////

// let contador;
// let numero = readlineSync.questionInt ("Ingrese el numero del que desea saber las tablas:");
// let hastaNumero = readlineSync.questionInt ("Ingrese hasta que numero desea las tablas:");

// for (contador=1; contador <= hastaNumero; contador++) {
//     resultado = numero * contador;
//     console.log (numero, "x", contador, "=", resultado);
// }

/////ENCONTRAR NUMERO MAXIMO/////

// let numeroMax;
// let numero;

// while (numero!=0) {
//     numero = readlineSync.questionInt ("Ingrese un numero:");
//     if (numeroMax == undefined || (numero!=0 && numero>numeroMax)) {
//         numeroMax = numero
//     }
// }
// console.log ("El mayor de los numeros es:", numeroMax);

/////DADOS/////

let numeroDados;
let contador;
let probabilidad = 1;

numeroDados = readlineSync.questionInt("Ingrese el numero de dados: ");

for (contador=1; contador<=numeroDados; contador++) {
    probabilidad = probabilidad *6;
}

console.log ("El numero de posibilidades de que todos los dados sean 6 es: 1/", probabilidad);
