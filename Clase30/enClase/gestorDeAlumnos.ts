import {Alumno} from "./alumno";
import {Examen} from "./examen";

export class GestorDeAlumnos {
    private listaLegajos: Alumno[];

    public constructor (listaLegajos: Alumno[]) {
        this.listaLegajos = listaLegajos;
    }

    public searchAlumno(dni: number): Alumno {
        for (let i: number= 0; i<this.listaLegajos.length; i ++) {
            if (dni == this.listaLegajos[i].getDni()) {
                console.log("El alumno se encuentra en el listado");
                return this.listaLegajos[i];
            }
        }
        return null;
    }

    public checkInAlumno(alumno: Alumno): void {
        this.listaLegajos.push(alumno);
    }

    public obtenerPromedioGeneralAlumno(dni: number): number {
        let i: number;
        for (i = 0; i <this.listaLegajos.length; i++) {
            if (dni == this.listaLegajos[i].getDni()) {
                return this.listaLegajos[i].getPromedioGeneral();
            }
        }
        return -1;
    }

    public obtenerListaExamenesPorAlumno (dni: number): Examen[] {
        for (let i: number=0; i<this.listaLegajos.length; i++) {
            if(dni == this.listaLegajos[i].getDni()) {
                return this.listaLegajos[i].getListaExamenes();
            }
        }
        return null;
    }

    public getAlumnos (): Alumno[]  {
        return this.listaLegajos;
    }

    public obtenerPromedioAula (): number {
        let promedio: number = 0;
        let suma: number= 0;
        if (this.listaLegajos.length == 0) {
            return -1;
        } 
        for (let i: number=0; i<this.listaLegajos.length; i++) {
            suma = suma + this.listaLegajos[i].getPromedioGeneral();
        }
        promedio = suma/this.listaLegajos.length;
        return promedio;
    }
}