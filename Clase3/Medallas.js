let readlineSync = require('readline-sync');
let posicionLlegada = readlineSync.questionInt("Escriba la posicion de llegada:");

if (posicionLlegada >0){
    switch (posicionLlegada){
        case 1:
            console.log ("Entregar medalla de ORO.");
        break;
        case 2:
            console.log ("Entregar medalla de PLATA.");
        break;
        case 3:
            console.log ("Entregar medalla de BRONCE.");
        break;
        default:
            console.log ("Entregar mención de participación.");
    }
}else{
    console.log ("No es válido.");
}