class Auto {
    private marca: string;
    private modelo: string;
    private velocidadActual: number;
    private año: number = 2020;

    public constructor(marca: string, modelo: string, año?: number) {
        this.marca = marca;
        this.modelo = modelo;

        if (año) {
            this.año = año;
        }
    }

    public acelerar(): void {
        this.velocidadActual += 10;
    }

    public getMarca(): string {
        return this.marca;
    }
}

let primerAuto: Auto = new Auto (`Ford`, `Fiesta`, 2005);
let segundoAuto: Auto = new Auto (`Renault`, `Clio`);
let tercerAuto: Auto = new Auto (`Peugeot`, `206`);

console.log(primerAuto);
console.log(segundoAuto.getMarca());
console.log(tercerAuto);

let arregloAutos: Auto[] = [primerAuto, segundoAuto, tercerAuto];
console.log(arregloAutos);
