import {Acelerador} from "./acelerador";
import {AutoCiudad} from "./autoCiudad";
import {Vehiculo} from "./vehiculo";

export class AutoCiudadChico extends AutoCiudad {
    public constructor(marca: string, modelo: string, patente: string) {
        super(marca, modelo, patente);
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual += 50;
    }
}
