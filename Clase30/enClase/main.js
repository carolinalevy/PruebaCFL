"use strict";
exports.__esModule = true;
var gestorDeAlumnos_1 = require("./gestorDeAlumnos");
var alumno_1 = require("./alumno");
var examen_1 = require("./examen");
// let arrayAlumnos: Alumno[] = []
// function leerArchivo (): Alumno[] {
//     let arrayAlumnos:Alumno[] = []
//     let archivoAlumnos:string = fs.readFileSync("archivoTexto", "utf-8");
//     let miLista:string[] = archivoAlumnos.split("\r\n");
//     for (let i:number=0; i<miLista.length; i++) {
//         let alumno: string = miLista[i];
//         let detalles: string[] = alumno.split(",");
//         let nombre: string = detalles[0];
//         let apellido: string = detalles[1];
//         let dni: number = parseInt(detalles[2]);
//         let alumnoNuevo: Alumno = new Alumno (nombre, apellido, dni);
//         arrayAlumnos.push(alumnoNuevo);
//     }
//     return arrayAlumnos;
// }
var listaLegajos = [];
var gestorAlumnos = new gestorDeAlumnos_1.GestorDeAlumnos(listaLegajos);
var alumno1 = new alumno_1.Alumno("Juan", "Martinez", 32803452, [
    new examen_1.Examen("Filosofia", 8),
    new examen_1.Examen("Biologia", 9),
    new examen_1.Examen("Matematica", 6)
]);
var alumno2 = new alumno_1.Alumno("Maria", "Villanueva", 33211920, [
    new examen_1.Examen("Filosofia", 7),
    new examen_1.Examen("Biologia", 8),
    new examen_1.Examen("Matematica", 8)
]);
var alumno3 = new alumno_1.Alumno("Julia", "Marquez", 32910221, [
    new examen_1.Examen("Filosofia", 7),
    new examen_1.Examen("Biologia", 8),
    new examen_1.Examen("Matematica", 9)
]);
var alumno4 = new alumno_1.Alumno("Martin", "Jarque", 33291000, [
    new examen_1.Examen("Filosofia", 8),
    new examen_1.Examen("Biologia", 4),
    new examen_1.Examen("Matematica", 7)
]);
var alumno5 = new alumno_1.Alumno("Gabriel", "Lopez", 32199273, [
    new examen_1.Examen("Filosofia", 6),
    new examen_1.Examen("Biologia", 6),
    new examen_1.Examen("Matematica", 6)
]);
var alumno6 = new alumno_1.Alumno("Luisa", "Otamendi", 32129032, [
    new examen_1.Examen("Filosofia", 9),
    new examen_1.Examen("Biologia", 8),
    new examen_1.Examen("Matematica", 8)
]);
gestorAlumnos.checkInAlumno(alumno1);
gestorAlumnos.checkInAlumno(alumno2);
gestorAlumnos.checkInAlumno(alumno3);
gestorAlumnos.checkInAlumno(alumno4);
gestorAlumnos.checkInAlumno(alumno5);
gestorAlumnos.checkInAlumno(alumno6);
console.log(gestorAlumnos.getAlumnos());
console.log("-----");
console.log("Promedio general del Alumno " + gestorAlumnos.searchAlumno(32199273).getApellido() + " " + gestorAlumnos.searchAlumno(32199273).getNombre());
console.log(gestorAlumnos.obtenerPromedioGeneralAlumno(32199273));
console.log("-----");
console.log("Lista de examenes del alumno " + gestorAlumnos.searchAlumno(32129032).getApellido() + " " + gestorAlumnos.searchAlumno(32129032).getNombre());
console.log(gestorAlumnos.obtenerListaExamenesPorAlumno(32129032));
console.log("-----");
console.log("El promedio general del aula es: " + gestorAlumnos.obtenerPromedioAula());
console.log("-----");
var examenFisica = new examen_1.Examen("Fisica", 8);
gestorAlumnos.searchAlumno(33211920).addExamen(examenFisica);
console.log(gestorAlumnos.obtenerListaExamenesPorAlumno(33211920));
