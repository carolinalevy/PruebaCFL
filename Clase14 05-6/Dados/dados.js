"use strict";

let azar = (tope) => {
    return Math.floor(Math.random()*tope);
}

let myButton = document.getElementById(`boton`);
let resultado = document.getElementById(`resultado`);

let calcularVeces = () => {
    let i;
    let dado1;
    let dado2;
    let suma=0;
    let contador=0;
    for (i=0; i<1000; i++) {
        dado1 = azar(6);
        dado2 = azar(6);
        suma = dado1 + dado2;
        if (suma==7) {
            contador = contador +1;
        }
    }
    resultado.innerHTML = `Salio ${contador} cantidad de veces 7.`;
}

myButton.addEventListener("click", calcularVeces());
