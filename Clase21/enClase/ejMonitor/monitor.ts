import * as rs from '../node_modules/readline-sync';

class Monitor {
    private estaEncendido: boolean;
    private pulgadas: number;

    constructor (estaEncendido:boolean, pulgadas: number) {
        this.estaEncendido = false;
        this.pulgadas = pulgadas;
    }

    prenderApagar (): void {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        } else {
            this.estaEncendido = true;
        }
    }
}

let estaEncendido = false;
let pulgadas = 42;
let miMonitor = new Monitor (estaEncendido, pulgadas);
console.log(miMonitor);
miMonitor.prenderApagar();
console.log(miMonitor);
