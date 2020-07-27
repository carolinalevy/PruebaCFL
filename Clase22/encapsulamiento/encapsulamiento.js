var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.año = 2020;
        this.marca = marca;
        this.modelo = modelo;
        if (año) {
            this.año = año;
        }
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    return Auto;
}());
var primerAuto = new Auto("Ford", "Fiesta", 2005);
var segundoAuto = new Auto("Renault", "Clio");
var tercerAuto = new Auto("Peugeot", "206");
console.log(primerAuto);
console.log(segundoAuto.getMarca());
console.log(tercerAuto);
var arregloAutos = [primerAuto, segundoAuto, tercerAuto];
console.log(arregloAutos);
