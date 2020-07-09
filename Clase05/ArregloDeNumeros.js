let readlineSync = require('readline-sync');

let num = new Array (7);

let indice = 0;
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

while (indice<7) {
    console.log (`El valor del arreglo en la posicion ${indice} es ${num[indice]}`);
    indice++
}


