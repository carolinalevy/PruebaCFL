"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.anio = anio;
    }
    Auto.prototype.GetMarca = function () {
        return this.marca;
    };
    Auto.prototype.SetMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.GetModelo = function () {
        return this.modelo;
    };
    Auto.prototype.SetModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.GetPatente = function () {
        return this.patente;
    };
    Auto.prototype.SetPatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.GetAnio = function () {
        return this.anio;
    };
    Auto.prototype.SetAnio = function (anio) {
        this.anio = anio;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(carList) {
        this.carList = carList;
    }
    RegistroAutomotor.prototype.CheckIn = function () {
        var marca = rs.question("Ingrese la marca: ");
        var modelo = rs.question("Ingrese el modelo: ");
        var patente = rs.question("Ingrese la patente:");
        var anio = rs.questionInt("Ingrese el año: ");
        var auto = new Auto(marca, modelo, patente, anio);
        this.carList.push(auto);
    };
    RegistroAutomotor.prototype.Search = function () {
        var buscar = rs.question("Ingrese la patente que desea buscar: ");
        var i;
        for (i = 0; i < carList.length; i++) {
            if (buscar == this.carList[i].GetPatente()) {
                console.log("El auto buscado esta en la lista.");
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.ModifyMarca = function (marca) {
        var posicion = this.Search();
        if (posicion >= 0) {
            this.carList[posicion].SetMarca(marca);
        }
    };
    RegistroAutomotor.prototype.ModifyModelo = function (modelo) {
        var posicion = this.Search();
        if (posicion >= 0) {
            this.carList[posicion].SetModelo(modelo);
        }
    };
    RegistroAutomotor.prototype.ModifyPatente = function (patente) {
        var posicion = this.Search();
        if (posicion >= 0) {
            this.carList[posicion].SetPatente(patente);
        }
    };
    RegistroAutomotor.prototype.ModifyAnio = function (anio) {
        var posicion = this.Search();
        if (posicion >= 0) {
            this.carList[posicion].SetAnio(anio);
        }
    };
    RegistroAutomotor.prototype.List = function () {
        for (var i = 0; i < carList.length; i++) {
            console.log(this.carList[i]);
        }
    };
    RegistroAutomotor.prototype.Delete = function () {
        var posicion = this.Search();
        if (posicion >= 0) {
            this.carList.splice(posicion, 1);
        }
        console.log("El auto fue eliminado.");
        return carList;
    };
    return RegistroAutomotor;
}());
var carList = [
    new Auto("Ford", "Ranger", "AU392UU", 2017),
    new Auto("Renault", "Captur", "AR281US", 2019),
    new Auto("Peugeot", "3008", "AA348TD", 2019)
];
var primerAuto = new Auto("Ford", "Focus", "AA432RT", 2019);
console.log(primerAuto.GetAnio());
var registro = new RegistroAutomotor(carList);
// registro.List();
// registro.CheckIn();
// registro.List();
// registro.Search();
// registro.Delete();
registro.List();
registro.ModifyAnio(1990);
registro.List();
