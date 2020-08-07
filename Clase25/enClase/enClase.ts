class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor () {
        this.estaPrendido = true;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }

    public mandarMensaje ( msg: string, numero: number): boolean {
        console.log("Telefono manda msj");
        return true;
    }

    public hacerLlamada () : void {
        console.log("hace una llamada");
    }

    public prenderApagar () : void {
        console.log("Prende/Apaga");
    }
}

class Camara {
    private appAbierta: boolean;

    public constructor () {
        this.appAbierta = false;
    }

    public abrirApp ():void {
        console.log("la app se abrio");
    }

    public sacarFoto(): string {
        return "camara saca foto";
    }
}

class TelefonoConCamara extends Telefono {
    private camara: Camara;

    public constructor (camara:Camara) {
        super();
        this.camara = camara;
    }

    public sacarFoto(): void {
        this.camara.sacarFoto();
        console.log("saca foto la camara desde telefono con camara");
    }
}

let miCamara = new Camara();

let miTelefonoConCamara: TelefonoConCamara = new TelefonoConCamara(miCamara);

miTelefonoConCamara.hacerLlamada();
miTelefonoConCamara.mandarMensaje("hola que talll", 24923821);
miTelefonoConCamara.prenderApagar();
miTelefonoConCamara.prenderApagar();
miTelefonoConCamara.sacarFoto();

miCamara.abrirApp();
console.log(miCamara.sacarFoto());