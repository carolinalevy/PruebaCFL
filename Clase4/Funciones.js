let esMultiplo = (valor1,valor2) => {
    let resto = valor2%valor1;
    if (resto==0) {
        return true
    } else {
        return false
    }
}

let calcularPotencia = (base, exponente) => {
    let contador;
    for (contador=1; contador<=exponente; contador++) {
        potencia = potencia * base
    }
    return potencia
} 

