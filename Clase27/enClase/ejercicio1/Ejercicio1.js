var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
    };
    SmartPhone.prototype.apagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("Llamando..");
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("Click!");
    };
    return SmartPhone;
}());
var miSmartPhone = new SmartPhone();
miSmartPhone.prender();
console.log(miSmartPhone);
miSmartPhone.apagar();
console.log(miSmartPhone);
miSmartPhone.llamar("29301112");
miSmartPhone.sacarFoto();
