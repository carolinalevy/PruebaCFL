let readlineSync = require ('readline-sync');
/////EJEMPLO NOTAS SIN LOOP/////

// let nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9, nota10;
// let total;
// let promedio;

// nota1 = readlineSync.questionInt("Ingrese la nota1:");
// nota2 = readlineSync.questionInt("Ingrese la nota2:");
// nota3 = readlineSync.questionInt("Ingrese la nota3:");
// nota4 = readlineSync.questionInt("Ingrese la nota4:");
// nota5 = readlineSync.questionInt("Ingrese la nota5:");
// nota6 = readlineSync.questionInt("Ingrese la nota6:");
// nota7 = readlineSync.questionInt("Ingrese la nota7:");
// nota8 = readlineSync.questionInt("Ingrese la nota8:");
// nota9 = readlineSync.questionInt("Ingrese la nota9:");
// nota10 = readlineSync.questionInt("Ingrese la nota10:");

// total = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10;
// promedio = total/10;
// console.log ("El promedio de las notas es: ", promedio);

///// EJEMPLO NOTAS CON WHILE/////

// let nota;
// let promedio;
// let suma=0;
// let contador=1;

// while (contador<=4) {
//     nota = readlineSync.questionInt ("Ingrese una nota: ");
//     suma = suma + nota;
//     contador = contador +1;
// }
// promedio = suma/4;
// console.log ("El promedio de las notas ingresadas es: ", promedio);

///// EJEMPLO ESPERAR COLECTIVO CON WHILE/////

// let espera;
// let llegadaColectivo;

// llegadaColectivo = readlineSync.question("Llego el colectivo? (Y/N):");
// while (llegadaColectivo=="N") {
//     console.log ("Esperar el colectivo.");
//     llegadaColectivo = readlineSync.question ("Llego el colectivo? (Y/N): ");
// }
// console.log ("Llego el colectivo.");

///// EJEMPLOS CON FOR/////

///// EJEMPLO DE PROMEDIO DE NOTAS USANDO FOR/////

let contador;
let nota;
let suma =0;
let promedio;

for (contador=1; contador<=10; contador ++) {
    nota = readlineSync.questionFloat("Ingrese la nota " + contador + ":");
    suma = suma + nota;
}
promedio = suma/10;
console.log ("El promedio de las notas ingresadas es:", promedio);