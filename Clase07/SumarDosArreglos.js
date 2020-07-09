let readlineSync = require(`readline-sync`);

let dimension = readlineSync.questionInt (`Ingrese la longitud de los arreglos: `);
let arreglo1 = new Array (dimension);
let arreglo2 = new Array (dimension);
let arregloSuma = new Array (dimension);

let aleatorio = () => {
    return Math.floor(Math.random()*100);
}

let cargarArreglo = (arreglo) => {
    let indice;
    for (indice=0; indice< arreglo.length; indice++) {
        arreglo[indice] = aleatorio();
    }
}

let sumarDosArreglos = (arreglo1, arreglo2, dimension) => {
    let indice;
    let sumaArreglos=0;
    for (indice=0; indice<dimension; indice++) {
        sumaArreglos = arreglo1[indice] + arreglo2[indice];
        arregloSuma[indice] = sumaArreglos;
    }
    return arregloSuma
}
cargarArreglo(arreglo1);
console.log(arreglo1);
cargarArreglo(arreglo2);
console.log(arreglo2);
sumarDosArreglos(arreglo1, arreglo2, dimension);
console.log(`El resultado de la suma de los arreglos es: ${arregloSuma}`);
