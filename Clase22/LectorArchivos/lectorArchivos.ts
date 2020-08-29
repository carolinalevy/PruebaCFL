import * as fs from 'fs';
import * as rs from 'readline-sync';

class LectorArchivo {
    private archivoTexto: string;

    public constructor (archivoTexto: string) {
        this.archivoTexto = archivoTexto;
    }

    public  leerArchivo (): Auto[] {
        let archivoAutos:string = fs.readFileSync(this.archivoTexto, "utf-8");
        let miLista:string[] = archivoAutos.split("\r\n");
        let arrayAutos: Auto[] = [];
        for (let i:number=0; i<miLista.length; i++) {
            let auto: string = miLista[i];
            let detalles: string[] = auto.split(",");
            let marca: string = detalles[0];
            let modelo: string = detalles[1];
            let patente: string = detalles[2];
            let año: number = parseInt(detalles[3]);
            let autoNuevo: Auto = new Auto (marca, modelo, patente, año);
            arrayAutos.push(autoNuevo);
        }
        return arrayAutos;
    }
}

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
        for (i=0; i<this.carList.length; i++) {
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
        for(let i:number =0; i<this.carList.length; i++) {
            console.log(this.carList[i]);
        }
    }

    public delete():Auto[] {
        let posicion:number = this.search();
        if(posicion>=0) {
            this.carList.splice(posicion,1);
        }
        console.log("El auto fue eliminado.");
        return this.carList;
    }
}

let miLector: LectorArchivo = new LectorArchivo("registroAutomotor.txt");
let lista: Auto[] = miLector.leerArchivo();
let miRegistroAutomotor: RegistroAutomotor = new RegistroAutomotor (lista);


miRegistroAutomotor.list();
miRegistroAutomotor.modifyMarca("Toyota");
miRegistroAutomotor.search();
miRegistroAutomotor.delete();