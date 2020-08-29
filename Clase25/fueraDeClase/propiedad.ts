export class Propiedad {
    private nombreDueño: string;
    private direccion: string;
    protected valor: number;
    private tipoTransaccion: string;
    private metros: number;
    private codigoUnico: number;

    public constructor (nombreDueño: string, direccion: string, valor: number, tipoTransaccion: string, metros: number, codigoUnico: number) {
        this.nombreDueño = nombreDueño;
        this.direccion = direccion;
        this.valor = valor;
        this.tipoTransaccion = tipoTransaccion;
        this.metros = metros;
        this.codigoUnico = codigoUnico;
    }

    public getNombreDueño(): string {
        return this.nombreDueño;
    }

    public setNombreDueño(nombreDueño: string): void {
        this.nombreDueño = nombreDueño;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getTipoTransaccion(): string {
        return this.tipoTransaccion;
    }

    public setTipoTransaccion(tipoTransaccion: string): void {
        this.tipoTransaccion = tipoTransaccion;
    }

    public getMetros(): number {
        return this.metros;
    }

    public setMetros(metros: number): void {
        this.metros = metros;
    }

    public getCodigoUnico(): number {
        return this.codigoUnico;
    }

    public setCodigoUnico(codigoUnico: number): void {
        this.codigoUnico = codigoUnico;
    }
}