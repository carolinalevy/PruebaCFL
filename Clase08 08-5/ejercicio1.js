function a(v) {
    let r = [];
    let b =0;
    for (let i=0; i<v.length; i++) {
        console.log (`valor de v: ${v}, valor de r: ${r}; valor de b: ${b}, valor de i: ${i}`);
        console.log (`v[i] antes de entrar al if: ${v[i]}; v[i]%2: ${v[i]%2}`);
        if (v[i] % 2==0) {
            console.log (`entra en el if`);
            r[b] = v[i];
            b++
        }
    }
    console.log (r);
    return r;
}

let arreglo = [1,2,3,4,5];
console.log (a(arreglo));
