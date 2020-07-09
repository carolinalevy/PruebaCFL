let readlineSync = require('readline-sync');

let precioUnitario = readlineSync.questionInt("Ingrese el precio del producto:");
let cantidad = readlineSync.questionInt("Ingrese la cantidad que compró:");
let total = precioUnitario*cantidad;
let mes = readlineSync.questionInt("Ingrese el mes en el cual realizó su compra:");

if (mes==10){
    console.log ("Usted compró en nuestro mes Aniversario!");
    console.log ("Tendrá un descuento del 15% en el total de su compra!");
    let descuento = ((total)*0.15);
    let pagoFinal = (total-descuento);
    console.log ("Usted pagará:", pagoFinal);
}else{
    console.log ("El monto a pagar será:", total);
    console.log ("Este mes no tiene descuento.");
}