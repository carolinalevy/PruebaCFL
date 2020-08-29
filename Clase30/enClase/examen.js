"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen(materia, nota) {
        this.materia = materia;
        this.nota = nota;
    }
    Examen.prototype.getMateria = function () {
        return this.materia;
    };
    Examen.prototype.setMateria = function (materia) {
        this.materia = materia;
    };
    Examen.prototype.getNota = function () {
        return this.nota;
    };
    Examen.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return Examen;
}());
exports.Examen = Examen;
