class Televisor {
    private estaPrendido: boolean;
    private decodificador: Decodificador;

    constructor (decodificador : Decodificador) {
        this.decodificador = decodificador;
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
        this.estaPrendido = false;
        } else {
        this.estaPrendido = true;
        }
    }

    public subirVolumen(): void {
        if (this.estaPrendido) {
            this.decodificador.subirVolumen();
        }
    }

    public bajarVolumen(): void {
        if (this.estaPrendido) {
            this.decodificador.bajarVolumen();
        }
    }

    public subirCanal():void {
        if(this.estaPrendido) {
            this.decodificador.subirCanal();
        }
    }

    public bajarCanal(): void {
        if (this.estaPrendido) {
            this.decodificador.bajarCanal();
        }
    }

}

class Decodificador {
    private volumenActual: number;
    private canalActual: number;

    constructor (volumenActual:number, canalActual:number) {
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }

    public subirVolumen():void {
        this.volumenActual = this.volumenActual +1;
    }

    public bajarVolumen(): void {
        this.volumenActual = this.volumenActual -1;
    }

    public subirCanal(): void {
        this.canalActual = this.canalActual +1;
    }

    public bajarCanal(): void {
        this.canalActual = this.canalActual -1;
    }
}

let decodificador: Decodificador = new Decodificador(4, 22);
let primerTelevisor: Televisor = new Televisor(decodificador);
console.log(decodificador);
console.log(primerTelevisor);
primerTelevisor.prenderApagar();
primerTelevisor.bajarCanal();
primerTelevisor.bajarVolumen();
primerTelevisor.bajarVolumen();
console.log(decodificador);
console.log(primerTelevisor);
