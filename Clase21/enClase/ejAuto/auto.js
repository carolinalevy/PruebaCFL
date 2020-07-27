"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(velocidadActual, cambioActual) {
        this.estaEncendido = false;
        this.velocidadActual = velocidadActual;
        this.cambioActual = cambioActual;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    Auto.prototype.cambiarVelocidad = function (velocidadActual) {
        this.velocidadActual = velocidadActual;
    };
    Auto.prototype.cambiarCambio = function (cambioActual) {
        this.cambioActual = cambioActual;
    };
    return Auto;
}());
var velocidadActual = 0;
var cambioActual = 0;
var miAuto = new Auto(velocidadActual, cambioActual);
console.log(miAuto);
miAuto.encenderApagar();
velocidadActual = rs.questionInt("Indique la velocidad luego de recorrer 100mts: ");
cambioActual = rs.questionInt("Indique el cambio en el que esta para ir a esa velocidad: ");
miAuto.cambiarVelocidad(velocidadActual);
miAuto.cambiarCambio(cambioActual);
console.log(miAuto);
