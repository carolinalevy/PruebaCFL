import {Inmobiliaria} from "./inmobiliaria";
import {Propiedad} from "./propiedad";
import {Vivienda} from "./vivienda";
import {Lote} from "./lote";
import {Casa} from "./casa";
import {Departamento} from "./departamento";


let miListaPropiedades: Propiedad[] = []
let miInmobiliaria: Inmobiliaria = new Inmobiliaria (miListaPropiedades);

let vivienda1: Vivienda = new Departamento (1500, 2, 1, false, false, "JuanGarcia", "Alem 345", 13000, "Alquiler", 45, 1990);
let vivienda2: Propiedad = new Casa (true, 3, 1, true, false, "MariaPerez", "Rodrigrez 432", 14500, "Alquiler", 60, 1772);
let vivienda3: Vivienda = new Casa (false, 2, 1, true, false, "HugoSanchez", "Alberdi 224", 15000, "Alquiler", 70, 1920);
let vivienda4: Vivienda = new Departamento (4000, 4, 2, true, false, "JorgeMuñoz", "Mitre 344 4toA", 28000, "Alquiler", 80, 1722);

let lote1: Lote = new Lote (false, "PedroLopez", "Los Ombues 1000", 345000, "Venta", 300, 11182);
let lote2: Propiedad = new Lote (true, "MercedesPaz", "Calihue 2222", 300000, "Venta", 250, 18292);
let lote3: Lote = new Lote (false, "CelesteMendoza", "Los Tilos 110", 250000, "Venta", 200, 18299);


miInmobiliaria.ingresarPropiedad(vivienda1);
miInmobiliaria.ingresarPropiedad(vivienda2);
miInmobiliaria.ingresarPropiedad(vivienda3);
miInmobiliaria.ingresarPropiedad(vivienda4);
miInmobiliaria.ingresarPropiedad(lote1);
miInmobiliaria.ingresarPropiedad(lote2);
miInmobiliaria.ingresarPropiedad(lote3);

//miInmobiliaria.buscarPropiedad(1990);
//console.log(miListaPropiedades);

console.log(miInmobiliaria.listarAlquileres());
//console.log(miInmobiliaria.listarVentas());
miInmobiliaria.borrarPropiedad(1920);
console.log(miInmobiliaria.listarAlquileres());
console.log(miInmobiliaria.buscarPropiedad(1990).getTipoTransaccion());
console.log(miInmobiliaria.buscarPropiedad(18299).getValor());
