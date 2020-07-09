let readlineSync = require('readline-sync');

let hola = readlineSync.question("Ingrese su nombre aqui: ");

let awesome = require('awesome-banner');
awesome.banner(hola, 'font');
