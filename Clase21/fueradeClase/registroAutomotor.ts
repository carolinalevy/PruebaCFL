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

    public GetMarca() {
        return this.marca;
    }

    public SetMarca(marca: string): void {
        this.marca = marca;
    }

    public GetModelo() {
        return this.modelo;
    }

    public SetModelo(modelo:string): void {
        this.modelo = modelo;
    }

    public GetPatente() {
       return this.patente;
    }

    public SetPatente(patente: string): void {
        this.patente = patente;
    }

    public GetAnio() {
        return this.anio;
    }

    public SetAnio(anio:number):void {
        this.anio = anio;
    }
}

class RegistroAutomotor {
    private carList: Auto[];

    constructor (carList: Auto[]) {
        this.carList = carList;
    }

    public CheckIn():void {
        let marca = rs.question("Ingrese la marca: ");
        let modelo = rs.question("Ingrese el modelo: ");
        let patente = rs.question("Ingrese la patente:");
        let anio = rs.questionInt("Ingrese el año: ");
        let auto = new Auto(marca,modelo,patente,anio);
        this.carList.push(auto);
    }

    public Search(): number {
        let buscar: string = rs.question("Ingrese la patente que desea buscar: ");
        let i:number;
        for (i=0; i<carList.length; i++) {
            if(buscar == this.carList[i].GetPatente()) {
                console.log("El auto buscado esta en la lista.");
                return i;
            }
        }
        return -1;
    }

    public ModifyMarca(marca) {
        let posicion:number = this.Search();
        if (posicion>=0) {
            this.carList[posicion].SetMarca(marca);
        }
    }

    public ModifyModelo(modelo) {
        let posicion:number = this.Search();
        if (posicion>=0) {
            this.carList[posicion].SetModelo(modelo);
        }
    }

    public ModifyPatente(patente) {
        let posicion:number = this.Search();
        if (posicion>=0) {
            this.carList[posicion].SetPatente(patente);
        }
    }

    public ModifyAnio(anio) {
        let posicion:number = this.Search();
        if (posicion>=0) {
            this.carList[posicion].SetAnio(anio);
        }
    }

    public List():void {
        for(let i:number =0; i<carList.length; i++) {
            console.log(this.carList[i]);
        }
    }

    public Delete():Auto[] {
        let posicion:number = this.Search();
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
console.log(primerAuto.GetAnio());

let registro: RegistroAutomotor = new RegistroAutomotor(carList);
registro.List();
registro.CheckIn();
registro.List();
registro.Search();
registro.Delete();
registro.List();
registro.ModifyAnio(1990);
registro.List();