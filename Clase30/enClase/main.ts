import {GestorDeAlumnos} from "./gestorDeAlumnos";
import {Alumno} from "./alumno";
import {Examen} from "./examen";

let listaLegajos: Alumno[] = []

let gestorAlumnos: GestorDeAlumnos = new GestorDeAlumnos(listaLegajos);

let alumno1: Alumno = new Alumno ("Juan", "Martinez", 32803452, [
    new Examen ("Filosofia", 8),
    new Examen ("Biologia", 9),
    new Examen ("Matematica", 6)
]);

let alumno2: Alumno = new Alumno ("Maria", "Villanueva", 33211920, [
    new Examen ("Filosofia", 7),
    new Examen ("Biologia", 8),
    new Examen ("Matematica", 8)
] );

let alumno3: Alumno = new Alumno ("Julia", "Marquez", 32910221, [
    new Examen ("Filosofia", 7),
    new Examen ("Biologia", 8),
    new Examen ("Matematica", 9)
] );

let alumno4: Alumno = new Alumno ("Martin", "Jarque", 33291000, [
    new Examen ("Filosofia", 8),
    new Examen ("Biologia", 4),
    new Examen ("Matematica", 7)
]);

let alumno5: Alumno = new Alumno ("Gabriel", "Lopez", 32199273, [
    new Examen ("Filosofia", 6),
    new Examen ("Biologia", 6),
    new Examen ("Matematica", 6)
]);

let alumno6: Alumno = new Alumno ("Luisa", "Otamendi", 32129032, [
    new Examen ("Filosofia", 9),
    new Examen ("Biologia", 8),
    new Examen ("Matematica", 8)
]);

gestorAlumnos.checkInAlumno(alumno1);
gestorAlumnos.checkInAlumno(alumno2);
gestorAlumnos.checkInAlumno(alumno3);
gestorAlumnos.checkInAlumno(alumno4);
gestorAlumnos.checkInAlumno(alumno5);
gestorAlumnos.checkInAlumno(alumno6);

console.log(gestorAlumnos.getAlumnos());

console.log("-----");
console.log(`Promedio general del Alumno ${gestorAlumnos.searchAlumno(32199273).getApellido()} ${gestorAlumnos.searchAlumno(32199273).getNombre()}`);
console.log(gestorAlumnos.obtenerPromedioGeneralAlumno(32199273));
console.log("-----");
console.log(`Lista de examenes del alumno ${gestorAlumnos.searchAlumno(32129032).getApellido()} ${gestorAlumnos.searchAlumno(32129032).getNombre()}`);
console.log(gestorAlumnos.obtenerListaExamenesPorAlumno(32129032));
console.log("-----");
console.log(`El promedio general del aula es: ${gestorAlumnos.obtenerPromedioAula()}`);
console.log("-----");
let examenFisica: Examen = new Examen ("Fisica", 8);
gestorAlumnos.searchAlumno(33211920).addExamen(examenFisica);
console.log(gestorAlumnos.obtenerListaExamenesPorAlumno(33211920));