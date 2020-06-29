// let readlineSync = require('readline-sync');

// let numero = readlineSync.questionInt("Ingrese un numero:");

// if (numero != 0) {
//     let resto = numero %2
//     if (resto ==0 ){
//         console.log ("El número ingresado es PAR.");
//     } else {
//         console.log ("El número ingresado es IMPAR.");
//     }
// } else {
//     console.log ("Ingresó el número 0.");
//     while (numero == 0){
//         numero = readlineSync.questionInt ("Ingrese un número distinto a 0:");
//     }
// }


// DEVUELVE SOLO QUE INGRESE OTRO NUMERO PERO NO DICE SI ES PAR O IMPAR EL NUMERO NUEVO.//


let readlineSync = require('readline-sync');

let numero = readlineSync.questionInt("Ingrese un numero:");

while (numero == 0){
    numero = readlineSync.questionInt ("Ingrese un número distinto a 0:");
}
if (numero != 0) {
    let resto = numero %2
    if (resto == 0 ){
        console.log ("El número ingresado es PAR.");
    } else {
        console.log ("El número ingresado es IMPAR.");
    }
}
