"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Vivienda = void 0;
var propiedad_1 = require("./propiedad");
var Vivienda = /** @class */ (function (_super) {
    __extends(Vivienda, _super);
    function Vivienda(cantidadAmbientes, cantidadBaños, cochera, pileta, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) {
        var _this = _super.call(this, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) || this;
        _this.cantidadAmbientes = cantidadAmbientes;
        _this.cantidadBaños = cantidadBaños;
        _this.cochera = cochera;
        _this.pileta = pileta;
        return _this;
    }
    Vivienda.prototype.getCantidadAmbientes = function () {
        return this.cantidadAmbientes;
    };
    Vivienda.prototype.setCantidadAmbientes = function (cantidadAmbientes) {
        this.cantidadAmbientes = cantidadAmbientes;
    };
    Vivienda.prototype.getCantidadBaños = function () {
        return this.cantidadBaños;
    };
    Vivienda.prototype.setCantidadBaños = function (cantidadBaños) {
        this.cantidadBaños = cantidadBaños;
    };
    Vivienda.prototype.hasCochera = function () {
        return this.cochera;
    };
    Vivienda.prototype.setCochera = function (cochera) {
        this.cochera = cochera;
    };
    Vivienda.prototype.hasPileta = function () {
        return this.pileta;
    };
    Vivienda.prototype.setPileta = function (pileta) {
        this.pileta = pileta;
    };
    return Vivienda;
}(propiedad_1.Propiedad));
exports.Vivienda = Vivienda;
