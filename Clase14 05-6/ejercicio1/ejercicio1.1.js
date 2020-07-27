"use strict";

let contador=0;

let aumentarContador = () => {
    contador ++;
    let mih1 = document.getElementById(`mi-h1`);
    mih1.innerHTML = contador;
}

let disminuirContador = () => {
    contador --;
    let mih1 = document.getElementById(`mi-h1`);
    mih1.innerHTML = contador;
}

let modificarH1 = () => {
    let miInput = document.getElementById(`valor`);
    let miH1 = document.getElementById(`mi-h1`);
    let numero = parseInt(miInput.value,10);
    contador = contador + numero;
    miH1.innerHTML = contador;
}

