import * as fs from 'fs';
import * as rs from 'readline-sync';

class Auto {
    private marca: string;
    private modelo: string;
    private patente: string;
    private anio: number;

    constructor (marca:string, modelo:string, patente:string, anio:number) {
        this.marca=marca;
        this.modelo=modelo;
        this.patente=patente;
        this.anio=anio;
    }

    public getMarca() {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo:string): void {
        this.modelo = modelo;
    }

    public getPatente() {
       return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public getAnio() {
        return this.anio;
    }

    public setAnio(anio:number):void {
        this.anio = anio;
    }
}

class RegistroAutomotor {
    private carList: Auto[];

    constructor (carList: Auto[]) {
        this.carList = carList;
    }

    public checkIn():void {
        let marca: string = rs.question("Ingrese la marca: ");
        let modelo: string = rs.question("Ingrese el modelo: ");
        let patente: string = rs.question("Ingrese la patente:");
        let anio: number = rs.questionInt("Ingrese el año: ");
        let auto: Auto = new Auto(marca,modelo,patente,anio);
        this.carList.push(auto);
    }

    public search(): number {
        let buscar: string = rs.question("Ingrese la patente que desea buscar: ");
        let i:number;
        for (i=0; i<carList.length; i++) {
            if(buscar == this.carList[i].getPatente()) {
                console.log("El auto buscado esta en la lista.");
                return i;
            }
        }
        return -1;
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

    public modifyAnio(anio) {
        let posicion:number = this.search();
        if (posicion>=0) {
            this.carList[posicion].setAnio(anio);
        }
    }

    public list():void {
        for(let i:number =0; i<carList.length; i++) {
            console.log(this.carList[i]);
        }
    }

    public delete():Auto[] {
        let posicion:number = this.search();
        if(posicion>=0) {
            this.carList.splice(posicion,1);
        }
        console.log("El auto fue eliminado.");
        return carList;
    }
}

let carList:Auto[] = [
    new Auto ("Ford", "Ranger", "AU392UU", 2017),
    new Auto ("Renault", "Captur", "AR281US",2019),
    new Auto ("Peugeot", "3008", "AA348TD", 2019)
];

let primerAuto:Auto = new Auto ("Ford", "Focus", "AA432RT", 2019);
console.log(primerAuto.getAnio());

let registro: RegistroAutomotor = new RegistroAutomotor(carList);
registro.list();
registro.checkIn();
registro.list();
registro.search();
registro.delete();
registro.list();
registro.modifyAnio(1990);
registro.list();