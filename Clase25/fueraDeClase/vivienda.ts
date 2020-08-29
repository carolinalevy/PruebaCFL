import {Propiedad} from "./propiedad";

export class Vivienda extends Propiedad {
        private cantidadAmbientes: number;
        private cantidadBaños: number;
        private cochera: boolean;
        private pileta: boolean;

        public constructor (cantidadAmbientes: number, cantidadBaños: number, cochera: boolean, pileta: boolean, nombreDueño: string, direccion:string, valor: number, tipoTransaccion: string, metros:number, codigoUnico: number) {
            super(nombreDueño, direccion, valor, tipoTransaccion, metros, codigoUnico)
            this.cantidadAmbientes = cantidadAmbientes;
            this.cantidadBaños = cantidadBaños;
            this.cochera = cochera;
            this.pileta = pileta;
        }

        public getCantidadAmbientes(): number {
            return this.cantidadAmbientes;
        }

        public setCantidadAmbientes(cantidadAmbientes: number): void {
            this.cantidadAmbientes = cantidadAmbientes;
        }

        public getCantidadBaños(): number {
            return this.cantidadBaños;
        }

        public setCantidadBaños(cantidadBaños: number): void {
            this.cantidadBaños = cantidadBaños;
        }

        public hasCochera(): boolean {
            return this.cochera;
        }

        public setCochera(cochera: boolean): void {
            this.cochera = cochera;
        }

        public hasPileta(): boolean {
            return this.pileta;
        }

        public setPileta(pileta: boolean): void {
            this.pileta = pileta;
        }
    }

