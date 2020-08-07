var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        console.log("Telefono manda msj");
        return true;
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("hace una llamada");
    };
    Telefono.prototype.prenderApagar = function () {
        console.log("Prende/Apaga");
    };
    return Telefono;
}());
var Camara = /** @class */ (function () {
    function Camara() {
        this.appAbierta = false;
    }
    Camara.prototype.abrirApp = function () {
        console.log("la app se abrio");
    };
    Camara.prototype.sacarFoto = function () {
        return "camara saca foto";
    };
    return Camara;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(camara) {
        var _this = _super.call(this) || this;
        _this.camara = camara;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.camara.sacarFoto();
        console.log("saca foto la camara desde telefono con camara");
    };
    return TelefonoConCamara;
}(Telefono));
var miCamara = new Camara();
var miTelefonoConCamara = new TelefonoConCamara(miCamara);
miTelefonoConCamara.hacerLlamada();
miTelefonoConCamara.mandarMensaje("hola que talll", 24923821);
miTelefonoConCamara.prenderApagar();
miTelefonoConCamara.prenderApagar();
miTelefonoConCamara.sacarFoto();
miCamara.abrirApp();
console.log(miCamara.sacarFoto());
