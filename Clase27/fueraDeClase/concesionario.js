"use strict";
exports.__esModule = true;
exports.Concesionario = void 0;
var Concesionario = /** @class */ (function () {
    function Concesionario(leerEscribir) {
        this.listaVehiculos = [];
        this.leerEscribir = leerEscribir;
    }
    Concesionario.prototype.cargarVehiculos = function () {
        this.listaVehiculos = this.leerEscribir.leer();
    };
    Concesionario.prototype.guardarVehiculos = function () {
        this.leerEscribir.escribir(this.listaVehiculos);
    };
    Concesionario.prototype.listarVehiculos = function () {
        return this.listaVehiculos;
    };
    Concesionario.prototype.checkInVehiculo = function (vehiculoNuevo) {
        this.listaVehiculos.push(vehiculoNuevo);
    };
    Concesionario.prototype.deleteVehiculo = function (patente) {
        for (var i = 0; i < this.listaVehiculos.length; i++) {
            if (patente == this.listaVehiculos[i].getPatente()) {
                this.listaVehiculos.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Concesionario.prototype.searchVehiculo = function (patente) {
        for (var i = 0; i < this.listaVehiculos.length; i++) {
            if (patente == this.listaVehiculos[i].getPatente()) {
                return this.listaVehiculos[i];
            }
        }
        return null;
    };
    return Concesionario;
}());
exports.Concesionario = Concesionario;
