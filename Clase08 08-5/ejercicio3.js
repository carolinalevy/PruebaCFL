function c(a,i,j) {
    let r;
    if (a[i] === a[j]) {
        r=0;
    } else if (a[i] < a[j]) {
        r=-1;
    } else {
        r=1;
    }
    return r;
}

let array= [10,5,6,7,9];
console.log (c(array, 0,1));
// compara dos posiciones de un mismo arreglo, y devuelve  un resultado distinto segun 
// sean iguales, una mayor q otra o una menor q otra.