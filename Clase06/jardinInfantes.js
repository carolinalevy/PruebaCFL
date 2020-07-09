let readlineSync = require('readline-sync');

///// VERSION CON IF/////
// let asignarAula = (cantidadAlumnos) => {
//     if (cantidadAlumnos >0 && cantidadAlumnos<= 30) {
//         console.log (`Corresponde al aula: AMARILLO`);
//     } else if (cantidadAlumnos > 30 && cantidadAlumnos <= 35 ) {
//         console.log (`Corresponde el aula: VERDE`);
//     } else if (cantidadAlumnos > 35 && cantidadAlumnos <=40 ) {
//         console.log (`Corresponde el aula: AZUL`);
//     }
// }

// let cantidadAlumnos = readlineSync.questionInt (`Ingrese la cantidad de alumnos: `);
// asignarAula(cantidadAlumnos);


///// VERSION CON ARRAYS /////

                    ///// VER SI CARGAR EL ARRAY O YA MANDARLO ARMADO///// 
// let cargarAulas = (arrayAulas) => {
//     let indice;
//     let nombreAula;
//     for (indice=0; indice<arrayAulas.length; indice++) {
//         while (nombreAula != "0")
//             nombreAula = readlineSync.question(`Ingrese el nombre del aula, cuando no haya mas ingrese 0: `);
//             arrayAulas[indice] = nombreAula;
//     }
// }


// let cantidadAulas = readlineSync.questionInt (`Ingrese la cantidad de aulas disponibles: `);
// let arrayAulas = new Array (cantidadAulas);
// console.log (cargarAulas(arrayAulas) );
                    /////----------------------------------//////

let arrayAulas = ["AMARILLA", "VERDE", "AZUL"];
let capacidadAulas = new Array (30, 35, 40);
cantidadAlumnos = readlineSync.questionInt (`Ingrese la cantidad de alumnos a asignar aula: `);

let asignarAula = (arrayAulas, capacidadAulas, cantidadAlumnos) => {
    let indice;
    for (indice=0; indice<arrayAulas.length; indice++) {
        if (cantidadAlumnos > 0 && cantidadAlumnos != capacidadAulas[capacidadAulas.length]) {
            if (cantidadAlumnos === capacidadAulas[indice]) {
                console.log ("El curso utilizará el aula: ", arrayAulas[indice]);
            }
                // else if (capacidadAulas[indice] > cantidadAlumnos < capacidadAulas[indice++] ) {
            //     console.log ("El curso utilizará el aula: ", arrayAulas[indice++]);
            // }
            // if (cantidadAlumnos > capacidadAulas[indice] ) {
            //     arrayAulas[indice+1]
            // }
        }
    }
}

asignarAula(arrayAulas, capacidadAulas, cantidadAlumnos);

