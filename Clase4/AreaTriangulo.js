// let readlineSync = require('readline-sync');


// let calcularAreaTriangulo = (base, altura) => {
//     return (base*altura)/2
// }

// let i;

// for (i=1; i<=100; i++) {
//     console.log ("El area del triangulo es: ", calcularAreaTriangulo(i, i*2));
// }


// console.log ("El area del triangulo es:", calcularAreaTriangulo (1,2));
// console.log ("El area del triangulo es:", calcularAreaTriangulo (5,10));




let readlineSync = require('readline-sync');

let base;
let altura;
let area;

let calcularAreaTriangulo = (base, altura) => {
    return base*altura/2
}

let i;
for (i=1; i<=100;i++) {
    console.log ("El area del triangulo es:", calcularAreaTriangulo (i, i*2));
}
