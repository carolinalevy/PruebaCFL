"use strict";
exports.__esModule = true;
var Monitor = /** @class */ (function () {
    function Monitor(estaEncendido, pulgadas) {
        this.estaEncendido = false;
        this.pulgadas = pulgadas;
    }
    Monitor.prototype.prenderApagar = function () {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    return Monitor;
}());
var estaEncendido = false;
var pulgadas = 42;
var miMonitor = new Monitor(estaEncendido, pulgadas);
console.log(miMonitor);
miMonitor.prenderApagar();
console.log(miMonitor);
