"use strict";
exports.__esModule = true;
exports.Inmobiliaria = void 0;
var Inmobiliaria = /** @class */ (function () {
    function Inmobiliaria(listaPropiedades) {
        this.listaPropiedades = listaPropiedades;
    }
    Inmobiliaria.prototype.listarAlquileres = function () {
        var listaAlquileres = [];
        for (var i = 0; i < this.listaPropiedades.length; i++) {
            if (this.listaPropiedades[i].getTipoTransaccion().toLowerCase() === "alquiler") {
                listaAlquileres.push(this.listaPropiedades[i]);
            }
        }
        return listaAlquileres;
    };
    Inmobiliaria.prototype.listarVentas = function () {
        var listaVentas = [];
        for (var i = 0; i < this.listaPropiedades.length; i++) {
            if (this.listaPropiedades[i].getTipoTransaccion().toLowerCase() === "venta") {
                listaVentas.push(this.listaPropiedades[i]);
            }
        }
        return listaVentas;
    };
    Inmobiliaria.prototype.ingresarPropiedad = function (propiedad) {
        this.listaPropiedades.push(propiedad);
    };
    Inmobiliaria.prototype.borrarPropiedad = function (codigoUnico) {
        for (var i = 0; i < this.listaPropiedades.length; i++) {
            if (codigoUnico == this.listaPropiedades[i].getCodigoUnico()) {
                this.listaPropiedades.splice(i, 1);
                console.log("La propiedad fue borrada");
            }
        }
    };
    Inmobiliaria.prototype.buscarPropiedad = function (codigoUnico) {
        for (var i = 0; i < this.listaPropiedades.length; i++) {
            if (codigoUnico == this.listaPropiedades[i].getCodigoUnico()) {
                console.log("La propiedad buscada está en la lista.");
                return this.listaPropiedades[i];
            }
        }
        return null;
    };
    return Inmobiliaria;
}());
exports.Inmobiliaria = Inmobiliaria;
