let readlineSync =require('readline-sync')
let tiempoPrograma1 = readlineSync.question("Cuanto tiempo estuvo sin usar:")
console.log ("Estuvo sin usar:", tiempoPrograma1);
let tiempoPrograma2 = readlineSync.question ("Cuanto tiempo estuvo usando otro programa:");
console.log ("Tiempo usando otro programa:", tiempoPrograma2);

if (tiempoPrograma1>2 && tiempoPrograma2<=5){
    console.log ("Apaga PC")
}else{
    console.log ("Sigue usando PC")
}