let array: number[] = [3,14,26,4,11];

function sumaArreglos (array:number[]):number{
    let suma: number =0;
    for (let i: number =0; i< array.length;i++) {
        suma = suma + array[i];
    }
    return suma;
}

console.log(sumaArreglos(array));


