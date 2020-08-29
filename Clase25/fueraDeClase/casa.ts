import {Vivienda} from "./vivienda";

export class Casa extends Vivienda {
    private patio: boolean;

    public constructor (patio: boolean, cantidadAmbientes: number, cantidadBaños: number, cochera: boolean, pileta:boolean, nombreDueño: string, direccion: string, valor: number, tipoTransaccion: string, metros: number, codigoUnico: number) {
        super (cantidadAmbientes, cantidadBaños, cochera, pileta, nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico);
        this.patio = patio;
    }

    public hasPatio(): boolean {
        return this.patio;
    }

    public setPatio(patio: boolean): void {
        this.patio = patio;
    }
}