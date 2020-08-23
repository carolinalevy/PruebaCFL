import {Propiedad} from "./propiedad";

export class Lote extends Propiedad {
    private conEdificacion: boolean;

    public constructor(conEdificacion: boolean, nombreDueño: string, direccion: string, valor: number, tipoTransaccion: string, metros: number, codigoUnico: number ) {
        super(nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico);
        this.conEdificacion = conEdificacion;
    }

    public calcularValor(): number{
        if (this.conEdificacion == true) {
            let valorNuevo: number = this.valor * 1.05;
            return valorNuevo;
        }
        return this.valor;
    }

    public isEdificado(): boolean {
        return this.conEdificacion;
    }
}

