import {Examen} from "./examen";

export class Alumno {
    private nombre: string;
    private apellido: string;
    private dni: number;
    private listaExamenes: Examen[];

    public constructor (nombre: string, apellido: string, dni: number, listaExamenes: Examen[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.listaExamenes = listaExamenes;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getListaExamenes(): Examen[] {        
        return this.listaExamenes;
    }   

    public getExamen(materia: string): Examen {
        for (let i: number =0; i<this.listaExamenes.length; i++) {
            if(materia == this.listaExamenes[i].getMateria()) {
                console.log(this.listaExamenes[i].getNota());
                return this.listaExamenes[i];
            }
        }
        return null;
    }

    public addExamen(examen: Examen): void {
        this.listaExamenes.push(examen);
    }

    public getPromedioGeneral(): number {
        let promedio: number = 0;
        let suma: number= 0;
        if (this.listaExamenes.length == 0) {
            return -1;
        } 
        for (let i: number=0; i<this.listaExamenes.length; i++) {
            suma = suma + this.listaExamenes[i].getNota();
        }
        promedio = suma/this.listaExamenes.length;
        return promedio;
    }
}