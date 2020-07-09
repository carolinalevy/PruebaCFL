let readlineSync = require('readline-sync');

let cargarArreglos1 = (nombres, notas1, notas2, notas3, dimension) => {
    let indice;
    for (indice=0; indice<dimension; indice++) {
        nombres[indice] = readlineSync.question (`Ingrese el nombre del alumno: `);
        notas1[indice] = readlineSync.questionInt (`Ingrese la nota del primer cuatrimestre: `);
        notas2[indice] = readlineSync.questionInt (`Ingrese la nota del segundo cuatrimestre: `);
        notas3[indice] = readlineSync.questionInt (`Ingrese la nota del tercer cuatrimestre: `);
    }
}

let calcularPromedio = (notas1, notas2, notas3) => {
    let suma=0;
    let promedio;
    suma = notas1 + notas2 + notas3;
    promedio = suma/3;
    return promedio
}


let buscarPersonaPromedio = (nombrePromedio, nombres, notas1, notas2, notas3) => {
    let indice;
    let promedio;
    for (indice=0; indice<nombres.length; indice++) {
        if (nombres[indice] == nombrePromedio) {
            // let suma=0;
            // suma = notas1[indice] + notas2[indice] + notas3[indice];
            // promedio = suma/3;
        promedio = calcularPromedio (notas1[indice], notas2[indice], notas3[indice]);
        return promedio;
        }
    }
    return promedio;
}

let dimension = readlineSync.questionInt (`Indique la cantidad de alumnos: `);
let arrayNombres = new Array (dimension);
let arrayNotas1 = new Array (dimension);
let arrayNotas2 = new Array (dimension);
let arrayNotas3 = new Array (dimension);

cargarArreglos1(arrayNombres, arrayNotas1, arrayNotas2, arrayNotas3, dimension);
nombrePromedio = readlineSync.question (`Ingrese el nombre del alumno para calcular promedio: `);
let valorPromedio = buscarPersonaPromedio (nombrePromedio, arrayNombres, arrayNotas1, arrayNotas2, arrayNotas3);
console.log (`El promedio para el alumno es: ${valorPromedio}`);

