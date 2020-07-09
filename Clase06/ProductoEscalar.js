let readlineSync = require('readline-sync');

let longitudArreglos = readlineSync.questionInt ("Ingrese la longitud de los arreglos:" );

let arreglo1 = new Array (longitudArreglos);
let arreglo2 = new Array (longitudArreglos);


let cargarArreglo = (nombreArreglo, longitudArreglos) => {
    for (let i=0; i<longitudArreglos; i++) {
        nombreArreglo[i] = readlineSync.question ("Ingrese los valores del arreglo: ");
    }
} 

let calcularProductoEscalar = (arreglo1, arreglo2) => {
    let productoEscalar=0;
    for (let i=0; i<longitudArreglos; i++) {
        productoEscalar += arreglo1[i]*arreglo2[i];
    }
    return productoEscalar;
}

console.log ("Arreglo1");
cargarArreglo(arreglo1, longitudArreglos);
console.log ("Arreglo2");
cargarArreglo(arreglo2, longitudArreglos);
console.log ("Total del producto escalar: ", calcularProductoEscalar(arreglo1, arreglo2));
