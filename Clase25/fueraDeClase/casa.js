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
exports.Casa = void 0;
var vivienda_1 = require("./vivienda");
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(patio, cantidadAmbientes, cantidadBaños, cochera, pileta, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) {
        var _this = _super.call(this, cantidadAmbientes, cantidadBaños, cochera, pileta, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico) || this;
        _this.patio = patio;
        return _this;
    }
    Casa.prototype.hasPatio = function () {
        return this.patio;
    };
    Casa.prototype.setPatio = function (patio) {
        this.patio = patio;
    };
    return Casa;
}(vivienda_1.Vivienda));
exports.Casa = Casa;
