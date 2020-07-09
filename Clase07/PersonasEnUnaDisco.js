let aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let cargarEdades = (cantidadTotal) => {
    let indice;
    for (indice=0; indice<cantidadTotal.length; indice++) {
        cantidadTotal[indice] = aleatorio(19,40);
    }
}

let controlarEdades = (cantidadTotal) => {
    let indice;
    let sumaMenores=0;
    for (indice=0; indice<cantidadTotal.length; indice++) {
        if (cantidadTotal[indice] < "21") {
            sumaMenores = sumaMenores + 1;
        }
    }
    return sumaMenores
}

let cantidadTotal = new Array (270);


cargarEdades(cantidadTotal);
console.log (cantidadTotal);
controlarEdades(cantidadTotal);
console.log(controlarEdades(cantidadTotal));
let sumaMayores = 270 - controlarEdades(cantidadTotal);
console.log(`En el boliche hay ${sumaMayores} mayores y ${controlarEdades(cantidadTotal)} menores.`);
