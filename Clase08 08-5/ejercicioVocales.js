let readlineSync = require('readline-sync');

let texto = readlineSync.question(`Ingrese el texto: `);

let textoMinusculas = texto.toLowerCase();
console.log(textoMinusculas);

let arrayMinusculas = textoMinusculas.split("");
console.log(arrayMinusculas);

let arrayVocales =[]
let buscarVocales = (arrayMinusculas, letra) => {
    let indice;
    for (indice=0; indice<arrayMinusculas.length; indice++) {
        if (arrayMinusculas[indice] == "a") {
            arrayVocales.push(letra)
        }
    }
    return arrayMinusculas[indice];
}
