let readlineSync = require('readline-sync');

let arrayAleatorio = new Array (10);

let azar = (tope) => {
   return Math.floor(Math.random()*tope);
}

let indice;
for (indice=0; indice<10; indice++) {
    arrayAleatorio[indice] = azar(100);
}

for (indice=0; indice<10; indice++) {
    console.log (`El numero del arreglo en la posicion ${indice} es: ${arrayAleatorio[indice]}`);
}