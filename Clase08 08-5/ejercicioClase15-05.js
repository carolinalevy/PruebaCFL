let readlineSync = require('readline-sync');

let texto = readlineSync.question(`Ingrese un texto: `);
let textoMinusculas = texto.toLowerCase();
let arrayMinusculas = textoMinusculas.split(""); 
console.log (arrayMinusculas);

let arrayVocales = ["a", "e", "i", "o", "u"];
let arrayConsonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let arrayVocalesTexto= [];
let arrayConsonantesTexto = [];

function buscarVocales (arrayMinusculas, letra) {
    let indice;
    for (indice=0; indice<arrayMinusculas.length; indice++) {
        if (arrayMinusculas[indice] == a || arrayMinusculas[indice] == e || arrayMinusculas[indice]) {
            arrayVocalesTexto[indice];
        }
    }
    return arrayVocalesTexto;
}

console.log(arrayVocalesTexto);


// let compararLetras = (arrayTexto, letra) => {
//     let indice;
//     let ocurrencia=0;
//         for (indice=0; indice<arrayTexto.length; indice++) {
//             if (arrayTexto[indice] == letra) {
//                 ocurrencia = ocurrencia +1
//             }
//         }
//         return ocurrencia;
//     }