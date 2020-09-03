interface Telefono {
    prender(): void;
    apagar(): void;
    llamar(numero: string): void;
}

class SmartPhone implements Telefono {
    private estaPrendido: boolean;

    public constructor () {
        this.estaPrendido = false;
    }

    public prender(): void {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
    }

    public apagar(): void {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
    }

    public llamar(numero: string): void {
        console.log("Llamando..");
    }

    public sacarFoto(): void {
        console.log("Click!");
    }
}

let miSmartPhone: SmartPhone = new SmartPhone();
miSmartPhone.prender();
console.log(miSmartPhone);
miSmartPhone.apagar();
console.log(miSmartPhone);
miSmartPhone.llamar("29301112");
miSmartPhone.sacarFoto();
