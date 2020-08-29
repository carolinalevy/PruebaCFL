import * as rs from 'readline-sync';

class Telefono {

    protected estaPrendido: boolean;
    protected bateriaActual: number;
    protected listaContactos: Contactos[];

    public constructor () {
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }

    public agregarContacto(): {
        
    }

    public mandarMensaje():void {
        console.log("Mensaje enviado");
    }

    public hacerLlamada(): string {
        this.listaContactos = [];
        let llamarA:string = rs.question("Ingrese a quien quiere llamar: ");
        for(let i:number=0; i<this.listaContactos.length; i++) {
            if(llamarA == this.listaContactos[i].getNombre()) {//!!!!!!!!!!!!!!!
                return `Llamando a ${llamarA}`;
            }
        }
        return "No existe el contacto en su lista.";
    }

    // public prenderApagar(): {

    // }
}

class TelefonoConCamara extends Telefono {

    public constructor () {
        super();
    } 

    public sacarFoto() {
        if (this.estaPrendido== true) {
            console.log("Click!");
        }
    }
}

class TelefonoConRadio extends Telefono {

    private frecuenciaActual: number;

    public constructor () {
        super();
        this.frecuenciaActual = 100.0;
    }

    public subirFrecuencia () : void {
        this.frecuenciaActual += .5;
    }

    public bajarFrecuencia () : void {
        this.frecuenciaActual -= .5;
    }
    
    public cambiarFrecuencia (frecuenciaNueva:number) : void {
        this.frecuenciaActual = frecuenciaNueva;
    }
}

class Contactos {
    private nombre: string;
    private telefono: number;

    public constructor (nombre:string, telefono:number) {
        this.nombre=nombre;
        this.telefono=telefono;
    }

    public setNombre(nombre:string): void {
        this.nombre = nombre;
    }

    public getNombre():string {
        return this.nombre;
    }

    public setTelefono(telefono:number):void {
        this.telefono = telefono;
    }

    public getTelefono(): number {
        return this.telefono;
    }
}

let carolina = new Contactos("carolina", 2494432188);
console.log(carolina.getNombre());
let miTelefono = new Telefono();
console.log(miTelefono.hacerLlamada());


carolina.getNombre();
