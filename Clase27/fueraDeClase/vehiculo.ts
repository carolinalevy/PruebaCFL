import {Acelerador} from "./acelerador";

export abstract class Vehiculo implements Acelerador {
    protected velocidadActual: number = 0;
    protected estaPrendido: boolean = false;
    protected marca: string;
    protected modelo: string;
    protected patente: string;

    public constructor (marca: string, modelo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    abstract acelerar(): void;

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

    public isEstaPrendido(): boolean {
        if (this.estaPrendido== true) {
            return true;
        } else {
            return false;
        }
    }

    public prender(): void {
        this.estaPrendido = true;
    }
    
    public apagar(): void {
        this.estaPrendido = false;
    }
    
    public getMarca(): string {
        return this.marca;
    }
    
    public setMarca(marca: string): void {
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
}