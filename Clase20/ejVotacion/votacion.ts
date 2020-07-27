import * as fs from 'fs';
import * as readlineSync from './node_modules/readline-sync';

let nombres: string = fs.readFileSync("nombres.txt", "utf8");
let escuelas: string = fs.readFileSync("escuelas.txt", "utf8");

let arrayNombres: string[] = nombres.split(" ");
console.log(arrayNombres);

let arrayEscuelas: string[] = escuelas.split(" ");
console.log(arrayEscuelas);


function ordenarVotantes (arrayNombres, arrayEscuelas): void {
    arrayNombres.sort();
    let cantidadVotantesPorEscuela = Math.ceil(arrayNombres.length/arrayEscuelas.length);
    console.log(cantidadVotantesPorEscuela);
    let escuelaActual:number = 0;
    let personasActual:number = 0;
    for (let i: number=0; i<arrayNombres.length; i ++) {
        if (personasActual < cantidadVotantesPorEscuela) {
            personasActual = personasActual +1;
        } else {
            escuelaActual = escuelaActual +1;
            personasActual = 1;
        }
        console.log(`A ${arrayNombres[i]} le corresponde votar en la ${arrayEscuelas[escuelaActual]}`);
    }

}

ordenarVotantes(arrayNombres, arrayEscuelas);
