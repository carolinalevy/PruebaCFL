let readlineSync = require(`readline-sync`);

let compararLetras = (arrayTexto, letra) => {
let indice;
let ocurrencia=0;
    for (indice=0; indice<arrayTexto.length; indice++) {
        if (arrayTexto[indice] == letra) {
            ocurrencia = ocurrencia +1
        }
    }
    return ocurrencia;
}

let texto = readlineSync.question (`Ingrese el texto: `);
let arrayTexto = texto.split("");
console.log(arrayTexto);
let arrayAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
for (indice=0; indice<arrayAbc.length; indice++) {
    let ocurrencia = compararLetras(arrayTexto, arrayAbc[indice]);
    if (ocurrencia !=0) {
        console.log (`Cantidad de ocurrencias de letra ${arrayAbc[indice]} es ${ocurrencia}`);
        console.log (`El porcentaje de ocurrencias es: ${ocurrencia*100/arrayTexto.length}`);
    }
}

