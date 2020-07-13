var array = [3, 14, 26, 4, 11];
function sumaArreglos(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma;
}
console.log(sumaArreglos(array));
