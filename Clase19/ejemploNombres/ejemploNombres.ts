import * as readlineSync from './node_modules/readline-sync';

let arrayNombres: string[] = [];

function cargarArray():string [] {
    let nombresArray: string = readlineSync.question("Ingrese nombres en el arreglo, finalice con (F): ");
    while (nombresArray != "F") {
        arrayNombres.push(nombresArray);
        nombresArray = readlineSync.question("Ingrese nombres en el arreglo, finalice con (F): ");
    }
    return arrayNombres;
}

function insertarNombre(): void {
    let insertar:string = readlineSync.question("Ingrese un nombre y (.) para finalizar: ");
    while (insertar != ".") {
        arrayNombres.push(insertar);
        insertar = readlineSync.question("Ingrese un nombre y (.) para finalizar: ");
    }
}

function buscarNombre(arrayNombres:string[]): number {
    let buscar: string = readlineSync.question("Ingrese la palabra que desea buscar y (.) para finalizar: ");
    let i:number;
    for (i=0; i <arrayNombres.length; i++) {
        if (buscar == arrayNombres[i]) {
            console.log("El nombre que buscas esta dentro del arreglo.");
            return i;
        }
    }
    return -1;
}

function eliminarNombre(arrayNombres: string[]): string[] {
    let posicion: number = buscarNombre(arrayNombres);
    if (posicion >=0) {
        arrayNombres.splice(posicion,1);
    }
    console.log(`El nombre fue eliminado.`)
    return arrayNombres;
}


// function actualizarNombre(opcion: string): void {

// }



console.log(cargarArray());
let opcion: string = readlineSync.question("Ingrese su opcion (I) para Insertar, (E) para eliminar, (B) para buscar o (A) para actualizar: ");

if(opcion=="I"){
    insertarNombre();
    console.log(arrayNombres);
    } else if (opcion== "B") {
        console.log(buscarNombre(arrayNombres));
            } else if (opcion== "E") {
                console.log(eliminarNombre(arrayNombres));
                } else {
                    console.log("La opción ingresada es incorrecta. Ingrese su opción.");
                }           





