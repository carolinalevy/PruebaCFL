import * as readlineSync from './node_modules/readline-sync';

function ejemplo3 (nombre:string):string {
    return  `hola, como estas ${nombre}?`;
}

let nombre:string;
nombre = readlineSync.question(`Ingrese su nombre aqui: `);

console.log(ejemplo3(nombre));