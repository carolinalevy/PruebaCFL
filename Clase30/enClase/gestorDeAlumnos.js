"use strict";
exports.__esModule = true;
exports.GestorDeAlumnos = void 0;
var GestorDeAlumnos = /** @class */ (function () {
    function GestorDeAlumnos(listaLegajos) {
        this.listaLegajos = listaLegajos;
    }
    GestorDeAlumnos.prototype.searchAlumno = function (dni) {
        for (var i = 0; i < this.listaLegajos.length; i++) {
            if (dni == this.listaLegajos[i].getDni()) {
                console.log("El alumno se encuentra en el listado");
                return this.listaLegajos[i];
            }
        }
        return null;
    };
    GestorDeAlumnos.prototype.checkInAlumno = function (alumno) {
        this.listaLegajos.push(alumno);
    };
    GestorDeAlumnos.prototype.obtenerPromedioGeneralAlumno = function (dni) {
        var i;
        for (i = 0; i < this.listaLegajos.length; i++) {
            if (dni == this.listaLegajos[i].getDni()) {
                return this.listaLegajos[i].getPromedioGeneral();
            }
        }
        return -1;
    };
    GestorDeAlumnos.prototype.obtenerListaExamenesPorAlumno = function (dni) {
        for (var i = 0; i < this.listaLegajos.length; i++) {
            if (dni == this.listaLegajos[i].getDni()) {
                return this.listaLegajos[i].getListaExamenes();
            }
        }
        return null;
    };
    GestorDeAlumnos.prototype.getAlumnos = function () {
        return this.listaLegajos;
    };
    GestorDeAlumnos.prototype.obtenerPromedioAula = function () {
        var promedio = 0;
        var suma = 0;
        if (this.listaLegajos.length == 0) {
            return -1;
        }
        for (var i = 0; i < this.listaLegajos.length; i++) {
            suma = suma + this.listaLegajos[i].getPromedioGeneral();
        }
        promedio = suma / this.listaLegajos.length;
        return promedio;
    };
    return GestorDeAlumnos;
}());
exports.GestorDeAlumnos = GestorDeAlumnos;
