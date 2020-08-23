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
var rs = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("Mensaje enviado");
    };
    Telefono.prototype.hacerLlamada = function () {
        this.listaContactos = [];
        var llamarA = rs.question("Ingrese a quien quiere llamar: ");
        for (var i = 0; i < this.listaContactos.length; i++) {
            if (llamarA == this.listaContactos[i].getNombre()) { //!!!!!!!!!!!!!!!
                return "Llamando a " + llamarA;
            }
        }
        return "No existe el contacto en su lista.";
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        return _super.call(this) || this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        if (this.estaPrendido == true) {
            console.log("Click!");
        }
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 100.0;
        return _this;
    }
    TelefonoConRadio.prototype.subirFrecuencia = function () {
        this.frecuenciaActual += .5;
    };
    TelefonoConRadio.prototype.bajarFrecuencia = function () {
        this.frecuenciaActual -= .5;
    };
    TelefonoConRadio.prototype.cambiarFrecuencia = function (frecuenciaNueva) {
        this.frecuenciaActual = frecuenciaNueva;
    };
    return TelefonoConRadio;
}(Telefono));
var Contactos = /** @class */ (function () {
    function Contactos(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Contactos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Contactos.prototype.getNombre = function () {
        return this.nombre;
    };
    Contactos.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Contactos.prototype.getTelefono = function () {
        return this.telefono;
    };
    return Contactos;
}());
var carolina = new Contactos("carolina", 2494432188);
console.log(carolina.getNombre());
var miTelefono = new Telefono();
console.log(miTelefono.hacerLlamada());
carolina.getNombre();
