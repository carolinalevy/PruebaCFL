import {Vivienda} from "./vivienda";

export class Departamento extends Vivienda {
    private expensas: number;

    public constructor (expensas: number, cantidadAmbientes: number, cantidadBaños: number, cochera: boolean, pileta: boolean, nombreDueño: string, direccion: string, valor: number, tipoTransaccion: string, metros: number, codigoUnico: number) {
        super(cantidadAmbientes, cantidadBaños, cochera, false , nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico);
        this.expensas =  expensas;
    }

    public getExpensas(): number {
        return this.expensas;
    }

    public setExpensas(expensas: number): void {
        this.expensas = expensas;
    }
} 