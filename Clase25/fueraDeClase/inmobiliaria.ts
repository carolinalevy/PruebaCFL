import {Propiedad} from "./propiedad";

export class Inmobiliaria {
    private listaPropiedades: Propiedad[];

    public constructor (listaPropiedades: Propiedad[]) {
        this.listaPropiedades = listaPropiedades;
    }

    public listarAlquileres(): Propiedad[] {
        let listaAlquileres: Propiedad[] = [];
        for (let i:number=0; i<this.listaPropiedades.length; i++) {
            if (this.listaPropiedades[i].getTipoTransaccion().toLowerCase() === "alquiler") {
                listaAlquileres.push(this.listaPropiedades[i])
            }
        }
        return listaAlquileres;
    }

    public listarVentas(): Propiedad[] {
        let listaVentas: Propiedad[] = [];
        for (let i:number=0; i<this.listaPropiedades.length; i++) {
            if(this.listaPropiedades[i].getTipoTransaccion().toLowerCase() === "venta") {
                listaVentas.push(this.listaPropiedades[i]);
            }
        }
        return listaVentas;
    }

    public ingresarPropiedad(propiedad: Propiedad): void {
        this.listaPropiedades.push(propiedad);
    }

    public borrarPropiedad(codigoUnico: number): void {
        for (let i: number = 0; i< this.listaPropiedades.length; i ++) {
            if (codigoUnico == this.listaPropiedades[i].getCodigoUnico()) {
                this.listaPropiedades.splice(i,1);
                console.log("La propiedad fue borrada");
            }
        }
    }

    public buscarPropiedad(codigoUnico: number): Propiedad {
        for (let i:number=0; i<this.listaPropiedades.length; i++) {
            if (codigoUnico == this.listaPropiedades[i].getCodigoUnico()) {
                console.log("La propiedad buscada está en la lista.");
                return this.listaPropiedades[i];
            }
        }
        return null;
    }
}
