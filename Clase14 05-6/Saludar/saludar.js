// let cambiarH1 = () => {
//     let miImput = document.getElementById("nombre");
//     let nodoH1 = document.getElementById("miH1");

//     nodoH1.innerHTML = miImput.value;
// }

let actualizarSaludo = () => {
    let nodoInput = document.getElementById(`textoNombre`);
    let nombre = nodoInput.value;
    console.log(nombre);
    let nodoSaludo = document.getElementById(`textoSaludo`);
    nodoSaludo.innerHTML = "Hola " + nombre;
}