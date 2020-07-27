function obtenerPosicion(arreglo,stringIngresado) {
    let indice;
    while(indice > arreglo.length) {
        if (indice[arreglo] != stringIngresado) {
            return arreglo
        }
    }
}

//. linea 3, indice no esta inicializado.
//. linea 4, en el if deberia ser arreglo[indice].
//. linea 7, no indica el incremento de indice dentro del while.
//. linea 3, indice debe ser < que arreglo.length.
//. linea 4, para que la funcion tenga sentido, la condicion del if debe ser cuando la posicion 
//      sea igual, no distinta al stringIngresado.
//. lines 5, debe retornar una posicion del arreglo, por lo tanto tiene que decir arreglo[indice].
//. linea 5, el return debe estar fuera del if, ya que si ninguna posicion es igual al string ingresado 
//      nunca entra en el if y no retorna nada.