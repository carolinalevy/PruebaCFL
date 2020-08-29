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
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(carList) {
        this.carList = carList;
    }
    RegistroAutomotor.prototype.checkIn = function () {
        var marca = rs.question("Ingrese la marca: ");
        var modelo = rs.question("Ingrese el modelo: ");
        var patente = rs.question("Ingrese la patente:");
        var año = rs.questionInt("Ingrese el año: ");
        var vehiculo = new Vehiculo(marca, modelo, patente, año);
        this.carList.push(vehiculo);
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
    RegistroAutomotor.prototype.searchVehiculo = function () {
        var buscar = rs.question("Ingrese la patente que desea buscar: ");
        console.log(buscar);
        var i;
        for (i = 0; i < this.carList.length; i++) {
            console.log(this.carList[i].getPatente());
            if (buscar === this.carList[i].getPatente()) {
                console.log("El auto buscado esta en la lista.");
                return this.carList[i];
            }
        }
        return null;
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
    RegistroAutomotor.prototype.modifyAnio = function (año) {
        var posicion = this.search();
        if (posicion >= 0) {
            this.carList[posicion].setAño(año);
        }
    };
    RegistroAutomotor.prototype.printList = function () {
        for (var i = 0; i < this.carList.length; i++) {
            console.log(this.carList[i]);
        }
    };
    RegistroAutomotor.prototype.list = function () {
        return this.carList;
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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, patente, año) {
        this.año = 2020;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.año = año;
    }
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
    Vehiculo.prototype.getAño = function () {
        return this.año;
    };
    Vehiculo.prototype.setAño = function (año) {
        this.año = año;
    };
    return Vehiculo;
}());
var Motos = /** @class */ (function (_super) {
    __extends(Motos, _super);
    function Motos(cilindrada, tipoMoto, marca, modelo, patente, año) {
        var _this = _super.call(this, marca, modelo, patente, año) || this;
        _this.cilindrada = cilindrada;
        _this.tipoMoto = tipoMoto;
        return _this;
    }
    Motos.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Motos.prototype.getTipoMoto = function () {
        return this.tipoMoto;
    };
    return Motos;
}(Vehiculo));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(tara, cantidadRuedas, marca, modelo, patente, año) {
        var _this = _super.call(this, marca, modelo, patente, año) || this;
        _this.tara = tara;
        _this.cantidadRuedas = cantidadRuedas;
        return _this;
    }
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    Camion.prototype.getCantidadRuedas = function () {
        return this.cantidadRuedas;
    };
    return Camion;
}(Vehiculo));
var carList = [];
var miRegistroAutomotor = new RegistroAutomotor(carList);
console.log(miRegistroAutomotor);
var camionUno = new Camion(3000, 8, "Scania", "R340", "KS392AS", 2010);
var camionDos = new Camion(4500, 10, "MercedesBenz", "Actros", "HH928JS", 2019);
var motoUno = new Motos(150, "urbana", "Zanella", "150", "JKI920", 2020);
var motoDos = new Motos(600, "deportiva", "Honda", "CBR600", "IKE230", 2019);
carList.push(camionUno);
carList.push(camionDos);
carList.push(motoUno);
carList.push(motoDos);
console.log("HOLA");
miRegistroAutomotor.list();
miRegistroAutomotor.printList();
console.log(camionUno.getTara());
camionUno.setPatente("afgsg322");
console.log(camionUno.getPatente());
console.log(camionDos.getCantidadRuedas());
console.log(motoDos.getPatente());
console.log(motoUno.getAño());
var miVehiculo = miRegistroAutomotor.searchVehiculo();
if (miVehiculo instanceof Camion) {
    var miCamion = miVehiculo;
    console.log("La tara de mi camion es: " + miCamion.getTara());
}
else if (miVehiculo instanceof Motos) {
    var miMoto = miVehiculo;
    console.log("La cilindrada de mi moto es: " + miMoto.getCilindrada());
}
console.log(miVehiculo);
