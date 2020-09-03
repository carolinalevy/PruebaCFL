"use strict";
exports.__esModule = true;
exports.LeerEscribirDesdeArchivo = void 0;
var autoCiudadChico_1 = require("./autoCiudadChico");
var autoDeportivo_1 = require("./autoDeportivo");
var camioneta_1 = require("./camioneta");
var fs = require("fs");
var LeerEscribirDesdeArchivo = /** @class */ (function () {
    function LeerEscribirDesdeArchivo(archivoNombre) {
        this.archivoNombre = archivoNombre;
    }
    LeerEscribirDesdeArchivo.prototype.leer = function () {
        var listaVehiculos = [];
        var archivo = fs.readFileSync(this.archivoNombre, "utf-8");
        var listaVehiculosArchivo = archivo.split("\r\n");
        for (var i = 0; i < listaVehiculosArchivo.length; i++) {
            var vehiculo = listaVehiculosArchivo[i];
            var detalleVehiculo = vehiculo.split(",");
            var marca = detalleVehiculo[0];
            var modelo = detalleVehiculo[1];
            var patente = detalleVehiculo[2];
            var tipo = detalleVehiculo[3];
            var autoNuevo = void 0;
            switch (tipo) {
                case "1":
                    autoNuevo = new autoCiudadChico_1.AutoCiudadChico(marca, modelo, patente);
                    break;
                case "2":
                    autoNuevo = new autoDeportivo_1.AutoDeportivo(marca, modelo, patente);
                    break;
                case "3":
                    autoNuevo = new camioneta_1.Camioneta(marca, modelo, patente);
                    break;
            }
            listaVehiculos.push(autoNuevo);
        }
        return listaVehiculos;
    };
    LeerEscribirDesdeArchivo.prototype.escribir = function (arrayVehiculos) {
        var archivoNuevo = "";
        for (var i = 0; i < arrayVehiculos.length; i++) {
            var vehiculo = arrayVehiculos[i];
            var linea = vehiculo.getMarca() + "," + vehiculo.getModelo() + "," + vehiculo.getPatente() + ",";
            if (vehiculo instanceof camioneta_1.Camioneta) {
                linea = linea + "3";
            }
            else if (vehiculo instanceof autoDeportivo_1.AutoDeportivo) {
                linea = linea + "2";
            }
            else {
                linea = linea + "1";
            }
            if (i !== (arrayVehiculos.length - 1)) {
                linea = linea + "\r\n";
            }
            archivoNuevo = archivoNuevo + linea;
        }
        fs.writeFileSync(this.archivoNombre, archivoNuevo);
    };
    return LeerEscribirDesdeArchivo;
}());
exports.LeerEscribirDesdeArchivo = LeerEscribirDesdeArchivo;
