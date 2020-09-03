"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, patente) {
        this.velocidadActual = 0;
        this.estaPrendido = false;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    Vehiculo.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Vehiculo.prototype.isEstaPrendido = function () {
        if (this.estaPrendido == true) {
            return true;
        }
        else {
            return false;
        }
    };
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
