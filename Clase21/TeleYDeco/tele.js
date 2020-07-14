var Televisor = /** @class */ (function () {
    function Televisor(decodificador) {
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido) {
            this.decodificador.subirVolumen();
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            this.decodificador.bajarVolumen();
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido) {
            this.decodificador.subirCanal();
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido) {
            this.decodificador.bajarCanal();
        }
    };
    return Televisor;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(volumenActual, canalActual) {
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }
    Decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    return Decodificador;
}());
var decodificador = new Decodificador(4, 22);
var primerTelevisor = new Televisor(decodificador);
primerTelevisor.bajarCanal();
primerTelevisor.prenderApagar();
console.log(decodificador);
primerTelevisor.bajarCanal();
console.log(primerTelevisor);
