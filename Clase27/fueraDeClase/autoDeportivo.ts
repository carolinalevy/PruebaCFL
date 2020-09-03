import {Acelerador} from "./acelerador";
import {Vehiculo} from "./vehiculo";

export class AutoDeportivo extends Vehiculo {

    public constructor (marca: string, modelo: string, patente: string) {
        super(marca, modelo, patente);
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual += 100;
    }
}