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
exports.Lote = void 0;
var propiedad_1 = require("./propiedad");
var Lote = /** @class */ (function (_super) {
    __extends(Lote, _super);
    function Lote(conEdificacion, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) {
        var _this = _super.call(this, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) || this;
        _this.conEdificacion = conEdificacion;
        return _this;
    }
    Lote.prototype.calcularValor = function () {
        if (this.conEdificacion == true) {
            var valorNuevo = this.valor * 1.05;
            return valorNuevo;
        }
        return this.valor;
    };
    Lote.prototype.isEdificado = function () {
        return this.conEdificacion;
    };
    return Lote;
}(propiedad_1.Propiedad));
exports.Lote = Lote;
