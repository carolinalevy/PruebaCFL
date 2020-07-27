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

// El programa pide un tamaño de array al usuario. Luego carga ese array con la funcion "cargar" 
// de forma aleatoria, con numeros enteros de 0 a 100.
// El usuario ingresa el numero "n" y en la funcion metodo se muestra cuantas veces aparece en el arreglo ya
// cargado, ese numero. En cada vuelta del for, se van sumando las veces que va apareciendo.
// En la funcion mostrar, va mostrando los numeros del arreglo cargados al azar, sumando en cada vuelta 
// del for el numero que sigue en el arreglo. Hasta mostrar el arreglo con todos los elementos en la ultima linea.
// 


// CORRECCION decir lo que dice el programa en general!
// 