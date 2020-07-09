let readlineSync = require('readline-sync');

let dimension = readlineSync.questionInt (`Indique la cantidad de alumnos: `);
let edadesAlumnos = new Array (dimension);


let aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let cargarEdades = (edadesAlumnos) => {
    let indice;
    for (indice=0; indice<edadesAlumnos.length; indice++) {
        edadesAlumnos[indice] = aleatorio(3,7);
    }
}

let sacarPromedioEdades = (edadesAlumnos) => {
    let indice;
    let suma=0;
    let promedio;
    for (indice=0; indice<edadesAlumnos.length; indice++) {
        suma = suma + edadesAlumnos[indice];
    }
    promedio = suma/edadesAlumnos.length;
    return promedio;
}

cargarEdades(edadesAlumnos);
for (let indice=0; indice<edadesAlumnos.length; indice++) {
    console.log (`La edad del alumno ${indice} es: ${edadesAlumnos[indice]}`);
}
console.log (edadesAlumnos);
console.log (`El promedio de las edades es: ${sacarPromedioEdades(edadesAlumnos)}`);
