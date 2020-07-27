function b(v,m) {
    let r = [];
    let b=0;
    for (let i=0; i<v.length;i++) {
        console.log (`i: ${i}; v.length: ${v.length}; b: ${b}; r: ${r}`);
        console.log (`v[i]: ${v[i]}; v[i]%m: ${v[i]%m}`);
        if (v[i]% m==0) {
            console.log (`entro al if`);
            console.log (`v[i]%m: ${v[i]%m}; b: ${b}; r: ${r}; r[b]: ${r[b]}`);
            r[b] = v[i];
            console.log(`r[b]: ${r[b]}`);
            b++;
        }
    }
    return r;
}

let array = [1,2,3,4,5];
console.log (b(array, 1))
//La funcion v devuelve un array nuevo r formado por los numeros de v que son 
// multiplos del parametro m cargado.
