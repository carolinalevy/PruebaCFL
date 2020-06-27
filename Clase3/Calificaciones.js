let readlineSync = require('readline-sync');

let nombre;
let notaPractica;
let notaProblemas;
let notaTeorico;

while (nombre != ""){
    nombre = readlineSync.question("Ingrese el nombre del alumno:");
    if (nombre != "") { 
        notaPractica = readlineSync.questionInt ("Ingrese la nota Practica:");
        notaProblemas = readlineSync.questionInt ("Ingrese la nota Problemas:");
        notaTeorico = readlineSync.questionInt ("Ingrese la nota Teorica:"); 
        if (notaPractica<0 || notaPractica>10 || 
            notaProblemas<0 || notaProblemas>10 ||
                notaTeorico<0 || notaTeorico>10) {
            console.log ("Alguno de los valores ingresados es incorrecto.");
        } else {
            let notaFinal = ((notaPractica*0.1) + (notaProblemas*0.5) + (notaTeorico*0.4))
            console.log ("Su nota final es:", notaFinal);
        }
    } else {
        console.log ("El nombre ingresado es inválido.");
    }
}


// while (nombre != ""){
//     nombre = readlineSync.question("Ingrese el nombre del alumno:");
//     if (nombre != "") { 
//         notaPractica = readlineSync.questionInt ("Ingrese la nota Practica:");
//         if (notaPractica<0 || notaPractica>10) {
//             console.log ("El valor ingresado es incorrecto.");
//         }
//         notaProblemas = readlineSync.questionInt ("Ingrese la nota Problemas:");
//         if (!(notaProblemas>=0 && notaProblemas<=10)) {
//             console.log ("El valor ingresado es incorrecto.");
//         }
//         notaTeorico = readlineSync.questionInt ("Ingrese la nota Teorica:"); 
//         if (!(notaTeorico>=0 && notaTeorico<=10)) {
//             console.log ("El valor ingresado es incorrecto.");
//         }
//     let notaFinal = ((notaPractica*0.1) + (notaProblemas*0.5) + (notaTeorico*0.4))
//     console.log ("Su nota final es:", notaFinal);
//     }else {
//         console.log ("El nombre ingresado es inválido.");
//     }
// }