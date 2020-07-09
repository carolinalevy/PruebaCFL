let readlineSync = require('readline-sync');

let dimension = readlineSync.questionInt (`Ingrese la dimension del arreglo: `);
let arreglo1 = new Array(dimension);
let arreglo2 = new Array(dimension);

let cargarArreglo = (nombre, dimension) => {
    let indice;
    for (indice=0; indice<dimension; indice++) {
        nombre[indice] = readlineSync.questionInt (`Ingrese los valores del arreglo: `);
    }
}

let calcularProductoEscalar = (arreglo1, arreglo2) => {
    let productoEscalar=0;
    for (indice=0; indice<dimension; indice++) {
        productoEscalar = productoEscalar + (arreglo1[indice]*arreglo2[indice]);
    }
    return productoEscalar
}

console.log(`Arreglo1`);
cargarArreglo(arreglo1,dimension);
console.log (`Arreglo2`);
cargarArreglo(arreglo2,dimension);
console.log (`El producto escalar es: ${calcularProductoEscalar (arreglo1,arreglo2)}`);
