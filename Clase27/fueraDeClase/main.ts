import {Acelerador} from "./acelerador";
import {Camioneta} from "./camioneta";
import {AutoDeportivo} from "./autoDeportivo";
import {AutoCiudadChico} from "./autoCiudadChico";
import {AutoCiudad} from "./autoCiudad";
import {Concesionario} from "./concesionario";
import {Vehiculo} from "./vehiculo";
import { LeerEscribirDesdeArchivo } from "./leerEscribir";

let miLectorPorArchivo: LeerEscribirDesdeArchivo = new LeerEscribirDesdeArchivo ("listaVehiculos.txt");
let miConcesionario: Concesionario = new Concesionario (miLectorPorArchivo);

miConcesionario.cargarVehiculos();
console.log(`Este es "listarVehiculos" ${miConcesionario.listarVehiculos()}`); // salen siempre [object Object]!
let miAutoNuevo: Vehiculo = new Camioneta ("Ford", "Ranger", "SD342TT");
miConcesionario.checkInVehiculo(miAutoNuevo);
console.log(miConcesionario.listarVehiculos());
console.log(miConcesionario.deleteVehiculo("SD342TT"));
console.log(`No lo encontro: ${miConcesionario.deleteVehiculo("SD352TT")}`);
console.log("ver1");
miAutoNuevo.getMarca();
miAutoNuevo.prender();
miAutoNuevo.acelerar();
miAutoNuevo.getVelocidadActual();
console.log("ver2");
console.log(miAutoNuevo);
console.log("ver4")
console.log(miConcesionario.searchVehiculo("UJ229IO"));
miConcesionario.guardarVehiculos();
