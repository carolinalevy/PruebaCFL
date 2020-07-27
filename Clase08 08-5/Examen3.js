let rl = require('readline-sync');

let elem, arr, nro, ocu;
elem = rl.questionInt('Ingrese tamaño: ');
arr = new Array(elem);
cargar(arr,elem);
nro = rl.questionInt('Ingrese número: ');
ocu = metodo(arr,elem,nro);
console.log("El número "+nro+" ... "+ocu);
mostrar(arr,elem);
function cargar(v,l) {
    for (let i=0; i<l; i++)
        v[i]=Math.floor(Math.random()*100);
}
function mostrar(v,l) {
    let c="";
    for (let i=0; i<l; i++)
        c+=v[i]+" ";
    console.log(c);
}
function metodo(v,l,n) {
    let oc;
    for (let i=0; i<l; i++)
        if (v[i]==n)
            oc++
}

// . El codigo esta arriba de las funciones que necesita para andar.
// . Linea 1,4 y 7 en vez de rl, deberia decir readlineSync.
// . Todas las variables estan escritas de forma poco claras, con lo que no cumple con las buenas 
//practicas para escribir un codigo.
// . En las tres funciones, faltan las llaves del for.
// . En la funcion metodo, falta inicializar "oc", dado que luego va a ir incrementandose dentro de 
//la funcion.

// . La funcion metodo deberia tener un return, abajo del for devolviendo como valor "oc", es decir 
//cuantas veces aparece el numero pedido en el Array.
