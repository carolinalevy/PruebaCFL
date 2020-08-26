"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, dni, listaExamenes) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.listaExamenes = listaExamenes;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Alumno.prototype.getListaExamenes = function () {
        return this.listaExamenes;
    };
    Alumno.prototype.getExamen = function (materia) {
        for (var i = 0; i < this.listaExamenes.length; i++) {
            if (materia == this.listaExamenes[i].getMateria()) {
                console.log(this.listaExamenes[i].getNota());
                return this.listaExamenes[i];
            }
        }
        return null;
    };
    Alumno.prototype.addExamen = function (examen) {
        this.listaExamenes.push(examen);
    };
    Alumno.prototype.getPromedioGeneral = function () {
        var promedio = 0;
        var suma = 0;
        if (this.listaExamenes.length == 0) {
            return -1;
        }
        for (var i = 0; i < this.listaExamenes.length; i++) {
            suma = suma + this.listaExamenes[i].getNota();
        }
        promedio = suma / this.listaExamenes.length;
        return promedio;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
