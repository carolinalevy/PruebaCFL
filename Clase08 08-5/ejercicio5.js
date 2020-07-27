function buscarMax(vector) {
    let maximo=0;
    v1=0;
    for(v1; v<vector.length; v1--) {
        if (vector<maximo) {
            maximo == vector;
        }
        return maximo;
    }
}

//. no declara variable v1;
//. usa v<vector.length en vez de v1;
//. usa , en vez de ; para separar condiciones en el for.
//. usa -- para recorrer el for y debiera ser ++.
//. en el if debiera comparar un elemento puntual "vector[v1]" y no todo el arreglo "vector".
//. en el if debiera ser vector[v1] > maximo y no <.
//. para asignar q amaximo pasa a ser vector, hay q poner =, en vez de ==.
//. dentro del if debe asignar maximo a un elemento del vector en particular. por lo q deberia decir vector[v1];
//. el return esta dentro del for y deberia estar afuera. sino asignaria el maximo al primer valor q entre al
//      if o al primer valor que pase por el for y saldria de la funcion sin recorrer los elementos faltantes.
//. el maximo esta inicializado en 0, por lo cual si el arreglo fuera solo de numeros negativos no funcionaria 
//      bien, ya que solo devolveria como maximo el numero 0, que puede que ni siquiera estuviera en el arreglo.
//      Para que funcione con todos los numeros, deberia estar inicializado con el primer valor del arreglo.

