"use strict";
exports.__esModule = true;
exports.Propiedad = void 0;
var Propiedad = /** @class */ (function () {
    function Propiedad(nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) {
        this.nombreDueño = nombreDueño;
        this.direccion = direccion;
        this.valor = valor;
        this.tipoTransaccion = tipoTransaccion;
        this.metros = metros;
        this.codigoUnico = codigoUnico;
    }
    Propiedad.prototype.getNombreDueño = function () {
        return this.nombreDueño;
    };
    Propiedad.prototype.setNombreDueño = function (nombreDueño) {
        this.nombreDueño = nombreDueño;
    };
    Propiedad.prototype.getDireccion = function () {
        return this.direccion;
    };
    Propiedad.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Propiedad.prototype.getValor = function () {
        return this.valor;
    };
    Propiedad.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    Propiedad.prototype.getTipoTransaccion = function () {
        return this.tipoTransaccion;
    };
    Propiedad.prototype.setTipoTransaccion = function (tipoTransaccion) {
        this.tipoTransaccion = tipoTransaccion;
    };
    Propiedad.prototype.getMetros = function () {
        return this.metros;
    };
    Propiedad.prototype.setMetros = function (metros) {
        this.metros = metros;
    };
    Propiedad.prototype.getCodigoUnico = function () {
        return this.codigoUnico;
    };
    Propiedad.prototype.setCodigoUnico = function (codigoUnico) {
        this.codigoUnico = codigoUnico;
    };
    return Propiedad;
}());
exports.Propiedad = Propiedad;
