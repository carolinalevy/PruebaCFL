let readlineSync = require('readline-sync');

let cantidadAlumnos = readlineSync.questionInt(`Ingrese la cantidad de alumnos: `);
let alumnos = new Array (cantidadAlumnos);
let notas1 = new Array (cantidadAlumnos);
let notas2 = new Array (cantidadAlumnos);
let notas3 = new Array (cantidadAlumnos);

let cargarArray = (alumnos, notas1, notas2, notas3, cantidadAlumnos) => {
    for (let indice=0; indice<cantidadAlumnos; indice++) {
        alumnos[indice] = readlineSync.question(`Nombre del alumno: `);
        notas1[indice] = readlineSync.questionInt(`Nota del primer cuatrimestre: `);
        notas2[indice] = readlineSync.questionInt(`Nota del segundo cuatrimestre: `);
        notas3[indice] = readlineSync.questionInt(`Nota del tercer cuatrimestre: `);
    }
    return alumnos, notas1, notas2, notas3;
}

let calcularPromedio = (cantidadAlumnos) => {
    let promedio;
    for(let indice=0;indice<cantidadAlumnos; indice++) {
        if (alumnos[indice]==alumnos) {
            promedio= notas1[indice]+ notas2[indice]+ notas3[indice]/3
        }
    }
    return promedio
}

cargarArray (alumnos, notas1, notas2, notas3)