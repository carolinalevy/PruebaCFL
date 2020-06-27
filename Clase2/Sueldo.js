let readlineSync = require('readline-sync');

let sueldo = readlineSync.questionInt("Ingrese el monto de su sueldo:");
// let aumento;
// let aumento1 = (sueldo*0.20);
// let sueldoFinal1 = (sueldo + aumento1); //--> salario con aumento sueldoFinal1= sueldo * 1,2 <-- con el aumento del 20%

// let aumento2 = (sueldo*0.10);
// let sueldoFinal2 = (sueldo + aumento2);

// let aumento3 = (sueldo*0.05);
// let sueldoFinal3 = (sueldo + aumento3);

if (sueldo<= 15000){
    console.log ("Tendrá un aumento del 20% en su próximo sueldo y pasará a cobrar:", (sueldo * 1.2));
}else {
    if (sueldo<= 20000){
        console.log ("Tendrá un aumento del 10% en su próximo sueldo y pasará a cobrar:", (sueldo * 1.1));
    }else {
        if (sueldo<=25000){
            console.log ("Tendrá un aumento del 5% en su próximo sueldo y pasará a cobrar:", (sueldo * 1.05));
        }else {
            console.log ("No tendrá un aumento el mes próximo."); // agregar lo que va a cobrar igual
            console.log ("Sigue cobrando:", sueldo);
        }
    }
}