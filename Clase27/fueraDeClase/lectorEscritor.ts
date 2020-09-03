import {Vehiculo} from "./vehiculo";

export interface LectorEscritorVehiculos {
    leer(): Vehiculo[];
    escribir(arrayVehiculos: Vehiculo[]): void;
}