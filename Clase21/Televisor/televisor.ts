class Televisor {
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number
    
    constructor (volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    
    prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }
    subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1;
    }
    bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1;
    }
    subirCanal(): void {
        this.canalActual = this.canalActual + 1;
    }
    bajarCanal(): void {
        this.canalActual = this.canalActual - 1;
    }
    elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
 }

let volumenInicial = 10;
let canalInicial = 14;

let miTelevisor = new Televisor(volumenInicial, canalInicial);
console.log(miTelevisor);

miTelevisor.bajarVolumen();
miTelevisor.elegirCanal(8);
miTelevisor.prenderApagar();
console.log(miTelevisor);
miTelevisor.prenderApagar();
console.log(miTelevisor);

