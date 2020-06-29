let readlineSync= require('readline-sync')
let base =readlineSync.questionInt("Ingrese la base:")
console.log ("La base es:", base)
let altura =readlineSync.questionInt("Ingrese la altura:")
console.log ("La altura es:", altura)
let Resultado = (base * altura);
console.log ("El area del rectangulo es:", Resultado);
