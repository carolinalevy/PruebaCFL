let readlineSync = require ('readline-sync')
let piensaNumero = readlineSync.questionInt("Escriba un numero del 0 al 9:");
console.log (piensaNumero, "x 9");

let numerox9 = (piensaNumero * 9);
console.log (numerox9);

if (numerox9>9){
    let sumaCifras= readlineSync.questionInt("Ingrese la suma de las dos cifras:");
    console.log ("Suma de las dos cifras:", sumaCifras);
    let total = (sumaCifras-5);
    console.log ("Restele 5 al total de la suma de las dos cifras", total);
}else {
    console.log("Restele 5 al numero que le dio la multiplicacion:", (numerox9-5));
}



