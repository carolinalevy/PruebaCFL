import {Acelerador} from "./acelerador";
import { Vehiculo } from "./vehiculo";

export abstract class AutoCiudad extends Vehiculo {
    protected velocidadActual: number;

    public constructor (marca: string, modelo: string, patente: string) {
        super(marca, modelo, patente);
    }

    abstract acelerar(): void;
}