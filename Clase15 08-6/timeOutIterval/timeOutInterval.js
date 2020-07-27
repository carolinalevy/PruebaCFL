"use strict";

let myButton = document.querySelector(".miBoton");
let myText = document.querySelector(".miTexto");

let mostrarMensaje = () => {
    console.log(`Pasaron 5 segundos`);
}

// myButton.addEventListener("click", function (e) {
//     setTimeout(mostrarMensaje, 5000);
// });

myButton.addEventListener("click", function(e) {
    setInterval(mostrarMensaje, 3000);
})