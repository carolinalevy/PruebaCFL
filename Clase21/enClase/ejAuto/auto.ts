import * as fs from 'fs';
import * as rs from 'readline-sync';

class Auto {
    private estaEncendido: boolean;
    private velocidadActual: number;
    private cambioActual: number;

    constructor (velocidadActual: number, cambioActual: number) {
        this.estaEncendido = false;
        this.velocidadActual = velocidadActual;
        this.cambioActual = cambioActual;
    }
    
    encenderApagar (): void {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        } else {
            this.estaEncendido = true;
        }
    }

    cambiarVelocidad (velocidadActual:number) :void {
        this.velocidadActual = velocidadActual;
    }

    cambiarCambio (cambioActual:number) : void {
        this.cambioActual = cambioActual;
    }
}


let velocidadActual = 0;
let cambioActual = 0;
let miAuto = new Auto (velocidadActual, cambioActual);
console.log(miAuto);
miAuto.encenderApagar();
velocidadActual = rs.questionInt("Indique la velocidad luego de recorrer 100mts: ");
cambioActual = rs.questionInt("Indique el cambio en el que esta para ir a esa velocidad: ");
miAuto.cambiarVelocidad(velocidadActual);
miAuto.cambiarCambio(cambioActual);
console.log(miAuto);