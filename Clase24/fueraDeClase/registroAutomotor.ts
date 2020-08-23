import * as fs from 'fs';
import * as rs from 'readline-sync';

class RegistroAutomotor {
    private carList: Vehiculo[];

    constructor (carList: Vehiculo[]) {
        this.carList = carList;
    }

    public checkIn():void {
        let marca: string = rs.question("Ingrese la marca: ");
        let modelo: string = rs.question("Ingrese el modelo: ");
        let patente: string = rs.question("Ingrese la patente:");
        let año: number = rs.questionInt("Ingrese el año: ");
        let vehiculo: Vehiculo = new Vehiculo(marca,modelo,patente,año);
        this.carList.push(vehiculo);
    }

    public search(): number {
        let buscar: string = rs.question("Ingrese la patente que desea buscar: ");
        let i:number;
        for (i=0; i<this.carList.length; i++) {
            if(buscar == this.carList[i].getPatente()) {
                console.log("El vehiculo buscado esta en la lista.");
                return i;
            }
        }
        return -1;
    }

    public searchVehiculo(): Vehiculo {
        let buscar: string = rs.question("Ingrese la patente que desea buscar: ");
        console.log(buscar);
        let i:number;
        for (i=0; i<this.carList.length; i++) {
            console.log(this.carList[i].getPatente());
            if(buscar === this.carList[i].getPatente()) {
                console.log("El vehiculo buscado esta en la lista.");
                return this.carList[i];
            }
        }
        return null;
    }


    public modifyMarca(marca) {
        let posicion:number = this.search();
        if (posicion>=0) {
            this.carList[posicion].setMarca(marca);
        }
    }

    public modifyModelo(modelo) {
        let posicion:number = this.search();
        if (posicion>=0) {
            this.carList[posicion].setModelo(modelo);
        }
    }

    public modifyPatente(patente) {
        let posicion:number = this.search();
        if (posicion>=0) {
            this.carList[posicion].setPatente(patente);
        }
    }

    public modifyAnio(año) {
        let posicion:number = this.search();
        if (posicion>=0) {
            this.carList[posicion].setAño(año);
        }
    }

    public list():void {
        for(let i:number =0; i<this.carList.length; i++) {
            console.log(this.carList[i]);
        }
    }

    public delete():Vehiculo[] {
        let posicion:number = this.search();
        if(posicion>=0) {
            this.carList.splice(posicion,1);
        }
        console.log("El vehiculo fue eliminado.");
        return this.carList;
    }
}

class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected patente: string;
    protected año: number = 2020;

    public constructor(marca: string, modelo: string, patente:string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.año = año;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca:string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }


}

class Motos extends Vehiculo {
    private cilindrada: number;
    private tipoMoto: string;

    public constructor(cilindrada: number, tipoMoto: string, marca: string, modelo:string, patente: string, año: number) {
        super(marca, modelo, patente, año);
        this.cilindrada = cilindrada;
        this.tipoMoto = tipoMoto;
    }

    public getCilindrada(): number {
        return this.cilindrada;
    }

    public getTipoMoto(): string {
        return this.tipoMoto;
    }
}


class Camion extends Vehiculo {
    private tara: number;
    private cantidadRuedas: number;

    public constructor (tara: number, cantidadRuedas:number, marca: string, modelo: string, patente: string, año:number) {
        super(marca, modelo, patente, año);
        this.tara = tara;
        this.cantidadRuedas = cantidadRuedas;
    }

    public getTara():number {
        return this.tara;
    }

    public getCantidadRuedas(): number {
        return this.cantidadRuedas;
    }
}



let carList: Vehiculo[] = [];
let miRegistroAutomotor: RegistroAutomotor = new RegistroAutomotor(carList);
console.log(miRegistroAutomotor);

let camionUno: Vehiculo = new Camion (3000, 8, "Scania", "R340","KS392AS", 2010); // castear!! por poner variable de tipo "Vehiculo"
let camionDos: Camion = new Camion(4500, 10, "MercedesBenz", "Actros", "HH928JS", 2019);
let motoUno: Motos = new Motos(150, "urbana", "Zanella", "150", "JKI920", 2020);
let motoDos: Motos = new Motos(600, "deportiva", "Honda", "CBR600", "IKE230", 2019);

carList.push(camionUno);
carList.push(camionDos);
carList.push(motoUno);
carList.push(motoDos);

miRegistroAutomotor.list();

console.log((<Camion> camionUno).getTara());
console.log(camionUno.getPatente());
console.log(camionDos.getCantidadRuedas());
console.log(motoDos.getPatente());
console.log(motoUno.getAño());



let miVehiculo: Vehiculo = miRegistroAutomotor.searchVehiculo();
if (miVehiculo instanceof Camion) {
    let miCamion: Camion = <Camion> miVehiculo;
    console.log(`La tara de mi camion es: ${miCamion.getTara()}`);
} else if (miVehiculo instanceof Motos) {
    let miMoto: Motos = <Motos> miVehiculo;
    console.log( `La cilindrada de mi moto es: ${miMoto.getCilindrada()}`);
}

console.log(miVehiculo);

