import {Vehiculo} from "./vehiculo";
import {LectorEscritorVehiculos} from "./lectorEscritor";

export class Concesionario {
    private listaVehiculos: Vehiculo[];
    private leerEscribir: LectorEscritorVehiculos;

    public constructor (leerEscribir: LectorEscritorVehiculos) {
        this.listaVehiculos = [];
        this.leerEscribir = leerEscribir;
    }

    public cargarVehiculos(): void  {
       this.listaVehiculos = this.leerEscribir.leer();
    }

    public guardarVehiculos(): void {
        this.leerEscribir.escribir(this.listaVehiculos);
    }

    public listarVehiculos(): Vehiculo[] {
        return this.listaVehiculos;
    }

    public checkInVehiculo(vehiculoNuevo: Vehiculo) : void {
        this.listaVehiculos.push(vehiculoNuevo);
    }

    public deleteVehiculo(patente: string): boolean {
        for(let i:number=0; i<this.listaVehiculos.length; i++) {
            if (patente == this.listaVehiculos[i].getPatente()) {
                this.listaVehiculos.splice(i,1);
                return true;
            }
        }
        return false;
    }

    public searchVehiculo(patente: string): Vehiculo {
        for (let i: number=0; i<this.listaVehiculos.length; i++) {
            if(patente == this.listaVehiculos[i].getPatente()) {
                return this.listaVehiculos[i];
            }
        }
        return null;
    }
}