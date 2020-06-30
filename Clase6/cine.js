let readlineSync = require('readline-sync');


let cargarButacas = (butacasCineAR, dimension) => {
    let indice;
    let ocupacion = true
    for (indice=0; indice<dimension; indice++) {
        ocupacion = readlineSync.question(`Para las butacas ocupadas marque 1, sino 2: `);
        if (ocupacion == "1") {
            butacasCineAR[indice] = true;
        } else {
            butacasCineAR[indice] = false;
        }
    }
} 

let calcularButacasVacias = (butacasCine, dimension) => {
    let indice;
    let sumaDesocupadas=0;
    for (indice=0; indice<dimension; indice++) {
        if (butacasCine[indice] == false) {
            sumaDesocupadas = sumaDesocupadas + 1;
        }
    }
    return sumaDesocupadas
}

let dimension = readlineSync.questionInt(`Indique las butacas totales de la sala del cine: `);
let butacasCine = new Array (dimension);
cargarButacas(butacasCine, dimension);
console.log (butacasCine);
console.log(`La cantidad de butacas vacias es: ${calcularButacasVacias(butacasCine, dimension)}`)
