import {LectorEscritorVehiculos} from "./lectorEscritor";
import {Vehiculo} from "./vehiculo";
import {AutoCiudadChico} from "./autoCiudadChico";
import {AutoDeportivo} from "./autoDeportivo";
import {Camioneta} from "./camioneta";
import * as fs from "fs";

export class LeerEscribirDesdeArchivo implements LectorEscritorVehiculos {
    private archivoNombre: string;

    public constructor (archivoNombre: string) {
        this.archivoNombre = archivoNombre;
    }

    public leer(): Vehiculo[] {
        let listaVehiculos: Vehiculo[]= [];
        let archivo: string = fs.readFileSync(this.archivoNombre, "utf-8");
        let listaVehiculosArchivo: string[] = archivo.split("\r\n");
        for (let i: number=0; i<listaVehiculosArchivo.length; i++) {
            let vehiculo: string = listaVehiculosArchivo[i];
            let detalleVehiculo: string[] = vehiculo.split(",");
            let marca: string = detalleVehiculo[0];
            let modelo: string = detalleVehiculo[1];
            let patente: string = detalleVehiculo[2];
            let tipo: string = detalleVehiculo[3];
            let autoNuevo: Vehiculo;
            switch (tipo) {
                case "1" : autoNuevo = new AutoCiudadChico (marca, modelo, patente);
                break;
                case "2" : autoNuevo = new AutoDeportivo (marca, modelo, patente);
                break;
                case "3" : autoNuevo = new Camioneta (marca, modelo, patente);
                break;
            }
            listaVehiculos.push(autoNuevo);
        }
        return listaVehiculos;
    }

    public escribir(arrayVehiculos: Vehiculo[]): void {
        let archivoNuevo: string = "";
        for (let i: number=0; i<arrayVehiculos.length; i++) {
            let vehiculo: Vehiculo = arrayVehiculos[i];
            let linea: string = vehiculo.getMarca() + "," + vehiculo.getModelo() + "," + vehiculo.getPatente() + ",";
            if (vehiculo instanceof Camioneta) {
                linea = linea + "3";
            } else if (vehiculo instanceof AutoDeportivo) {
                linea = linea + "2";
            } else {
                linea = linea + "1";
            }
            if (i !== (arrayVehiculos.length-1)) {
                linea = linea + "\r\n";
            }
            archivoNuevo = archivoNuevo + linea;
        }
        fs.writeFileSync(this.archivoNombre, archivoNuevo);
    }
}
