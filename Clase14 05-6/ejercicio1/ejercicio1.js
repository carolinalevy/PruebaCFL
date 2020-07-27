"use strict"

let contador=0;

let aumentaContador = () => {
    contador = contador +1;
    let nodoBtnAumenta = document.getElementById(`btnAumenta`);
    nodoBtnAumenta.innerHTML = contador;
}

let disminuyeContador = () => {
    contador = contador -1;
    let nodoBtnDisminuye = document.getElementById(`btnDisminuye`);
    nodoBtnDisminuye.innerHTML = contador;
}
