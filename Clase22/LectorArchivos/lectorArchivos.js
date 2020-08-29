"use strict";
exports.__esModule = true;
var fs = require("fs");
var rs = require("readline-sync");
var LectorArchivo = /** @class */ (function () {
    function LectorArchivo(archivoTexto) {
        this.archivoTexto = archivoTexto;
    }
    LectorArchivo.prototype.leerArchivo = function () {
        var archivoAutos = fs.readFileSync(this.archivoTexto, "utf-8");
        var miLista = archivoAutos.split("\r\n");
        var arrayAutos = [];
        for (var i = 0; i < miLista.length; i++) {
            var auto = miLista[i];
            var detalles = auto.split(",");
            var marca = detalles[0];
            var modelo = detalles[1];
            var patente = detalles[2];
            var año = parseInt(detalles[3]);
            var autoNuevo = new Auto(marca, modelo, patente, año);
            arrayAutos.push(autoNuevo);
        }
        return arrayAutos;
    };
    return LectorArchivo;
}());
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.anio = anio;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(carList) {
        this.carList = carList;
    }
    RegistroAutomotor.prototype.checkIn = function () {
        var marca = rs.question("Ingrese la marca: ");
        var modelo = rs.question("Ingrese el modelo: ");
        var patente = rs.question("Ingrese la patente:");
        var anio = rs.questionInt("Ingrese el año: ");
        var auto = new Auto(marca, modelo, patente, anio);
        this.carList.push(auto);
    };
    RegistroAutomotor.prototype.search = function () {
        var buscar = rs.question("Ingrese la patente que desea buscar: ");
        var i;
        for (i = 0; i < this.carList.length; i++) {
            if (buscar == this.carList[i].getPatente()) {
                console.log("El auto buscado esta en la lista.");
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.modifyMarca = function (marca) {
        var posicion = this.search();
        if (posicion >= 0) {
            this.carList[posicion].setMarca(marca);
        }
    };
    RegistroAutomotor.prototype.modifyModelo = function (modelo) {
        var posicion = this.search();
        if (posicion >= 0) {
            this.carList[posicion].setModelo(modelo);
        }
    };
    RegistroAutomotor.prototype.modifyPatente = function (patente) {
        var posicion = this.search();
        if (posicion >= 0) {
            this.carList[posicion].setPatente(patente);
        }
    };
    RegistroAutomotor.prototype.modifyAnio = function (anio) {
        var posicion = this.search();
        if (posicion >= 0) {
            this.carList[posicion].setAnio(anio);
        }
    };
    RegistroAutomotor.prototype.list = function () {
        for (var i = 0; i < this.carList.length; i++) {
            console.log(this.carList[i]);
        }
    };
    RegistroAutomotor.prototype["delete"] = function () {
        var posicion = this.search();
        if (posicion >= 0) {
            this.carList.splice(posicion, 1);
        }
        console.log("El auto fue eliminado.");
        return this.carList;
    };
    return RegistroAutomotor;
}());
var miLector = new LectorArchivo("registroAutomotor.txt");
var lista = miLector.leerArchivo();
var miRegistroAutomotor = new RegistroAutomotor(lista);
miRegistroAutomotor.list();
miRegistroAutomotor.modifyMarca("Toyota");
miRegistroAutomotor.search();
miRegistroAutomotor["delete"]();
