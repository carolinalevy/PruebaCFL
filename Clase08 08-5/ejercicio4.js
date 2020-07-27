function d(v) {
    let r =0;
    for ( let i=0; i<v.length; i++) {
        r= v[i] +r;
    }
    return r/v.length;
}

let array = [5,5,5,5];
console.log(d(array));
// suma todos los elementos de un arreglo y los divide por la cantidad total de elementos.
// devuelve el promedio.