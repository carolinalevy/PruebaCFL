"use strict";

let activar = document.querySelector(".activarBomba");

let activarBomba = () => {
    let contador=5;
    let cuentaRegresiva = document.querySelector(".cuentaRegresiva");
    let miIntervalo = setInterval(function () {
        if (contador==0) {
            cuentaRegresiva.innerHTML = "BOOM!!!";
            clearInterval(miIntervalo); 
        } else {
            contador--;
            cuentaRegresiva.innerHTML = contador;
        }
    }, 1000)
}

activar.addEventListener("click", activarBomba);
