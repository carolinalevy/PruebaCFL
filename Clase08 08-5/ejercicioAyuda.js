let readlineSync = require('readline-sync');

let texto = readlineSync.question(`Ingrese un texto: `);
let textoMinusculas = texto.toLowerCase();
let arrayMinusculas = textoMinusculas.split(""); 
console.log (arrayMinusculas);

let arrayVocales = ["a", "e", "i", "o", "u"];
//let arrayConsonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let arrayVocalesTexto= [];
let arrayConsonantesTexto = [];

let indice; // hola leon
for (indice=0; indice< arrayMinusculas.length; indice++) {
    let encontroVocal = false;
    for (indice1=0; indice1<arrayVocales.length; indice1++) {
        if (arrayMinusculas[indice] == arrayVocales[indice1]) {
            encontroVocal = true;
        }
    }
    if (encontroVocal == false) {
        arrayConsonantesTexto.push(arrayMinusculas[indice]);
    } else {
        arrayVocalesTexto.push(arrayMinusculas[indice]);
    }
}

console.log(arrayVocalesTexto);
console.log(arrayConsonantesTexto);