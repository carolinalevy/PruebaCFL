let readlineSync =require('readline-sync');

let palabraClave= "";
let contador=1;

while (contador<=3 && palabraClave.toUpperCase() != "EUREKA") {
    palabraClave = readlineSync.question("Ingrese su palabra clave:");
    if (palabraClave.toUpperCase() == "EUREKA"){
    console.log ("Su Palabra Clave es correcta.");
    }else {
        if (contador ==3){
            console.log ("Incorrecto.");
        }else {
        console.log ("Incorrecto. Intentelo de nuevo.");
        }
    }
    contador = contador +1;
};

if (palabraClave.toUpperCase() != "EUREKA"){
    console.log ("Alcanzó la cantidad máxima de intentos.");
}
