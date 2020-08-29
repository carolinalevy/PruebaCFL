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
exports.Departamento = void 0;
var vivienda_1 = require("./vivienda");
var Departamento = /** @class */ (function (_super) {
    __extends(Departamento, _super);
    function Departamento(expensas, cantidadAmbientes, cantidadBaños, cochera, pileta, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) {
        var _this = _super.call(this, cantidadAmbientes, cantidadBaños, cochera, false, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) || this;
        _this.expensas = expensas;
        return _this;
    }
    Departamento.prototype.getExpensas = function () {
        return this.expensas;
    };
    Departamento.prototype.setExpensas = function (expensas) {
        this.expensas = expensas;
    };
    return Departamento;
}(vivienda_1.Vivienda));
exports.Departamento = Departamento;
