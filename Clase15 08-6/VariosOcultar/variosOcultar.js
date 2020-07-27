"use strict";


// let mostrarOcultar = (contador) => {
//     let miMsj = document.getElementById("locator" + contador);
//     miMsj.classList.toggle("miMensaje");
// }

// let asignarEventos = (contador) => {
// let miBoton = document.getElementById("miBtn" + contador);
// miBoton.addEventListener("click", function (e) {
//     mostrarOcultar (contador);
// });
// }

// for (let i=1; i<=4; i++) {
// asignarEventos(i);
// }

let listaBotones = document.querySelectorAll("button");
let listaP = document.querySelectorAll("p");

let mostrarOcultar = (contador) => {
         listaP[contador].classList.toggle("miMensaje");
     }
    
for (let i=0; i<listaBotones.length; i++) {
    listaBotones[i].addEventListener("click", function (e) {
        mostrarOcultar (i);
    })
}