"use strict"

let miBoton = document.querySelector(".mas");
let miDivOculto = document.querySelector(".oculto");

miBoton.addEventListener(`click`, function(e) {
    miDivOculto.classList.toggle("oculto");
});

