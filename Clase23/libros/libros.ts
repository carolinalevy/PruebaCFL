import * as fs from 'fs';
import * as rs from 'readline-sync';

class Libro {
    private titulo: string;
    private autor: string;
    private isbn: number;
    private genero: string;
    private editorial: string;

    public constructor (titulo:string, autor:string, isbn:number, genero:string, editorial:string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.genero = genero;
        this.editorial = editorial;
    }

    public getTitulo ():string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor():string {
        return this.autor;
    }

    public setAutor(autor: string):void {
        this.autor = autor;
    }

    public getISBN():number {
        return this.isbn;
    }

    public setISBN(isbn: number):void {
        this.isbn = isbn;
    }

    public getGenero():string {
        return this.genero;
    }

    public setGenero(genero: string):void {
        this.genero = genero;
    }

    public getEditorial():string {
        return this.editorial;
    }

    public setEditorial(editorial: string):void {
        this.editorial= editorial;
    }
}

class GestorLibros {
    private misLibros:Libro[];

    public constructor(misLibros:Libro[]) {
        this.misLibros= misLibros;
    }

    public searchBook():number {
        let search:number = rs.questionInt("Ingrese el ISBN del libro que desea buscar: ");
        for (let i:number=0; i<this.misLibros.length;i++) {
            if (search == this.misLibros[i].getISBN()) {
                console.log("El libro buscado se encuentra en la lista. Titulo: " + this.misLibros[i].getTitulo());
                return i;
            }
        }
        console.log("El libro no se encuentra en la lista.");
        return -1;
    }

    public insertBook(libroNuevo:Libro): void {
        this.misLibros.push(libroNuevo);
    }

    public modifyTitulo(titulo): void {
        let found:number = this.searchBook();
        if ( found>=0) {
            this.misLibros[found].setTitulo(titulo);
        }
    }

    public modifyAutor(autor):void {
        let found:number = this.searchBook();
        if (found>=0) {
            this.misLibros[found].setAutor(autor);
        }
    }

    public modifyISBN(isbn): void {
        let found:number = this.searchBook();
        if ( found>=0) {
            this.misLibros[found].setISBN(isbn);
        }
    }

    public modifyGenero(genero): void {
        let found:number = this.searchBook();
        if ( found>=0) {
            this.misLibros[found].setGenero(genero);
        }
    }

    public modifyEditorial(editorial): void {
        let found:number = this.searchBook();
        if ( found>=0) {
            this.misLibros[found].setEditorial(editorial);
        }
    }
   
}


class LectorArchivo {
    private archivoTexto: string;

    public constructor (archivoTexto: string) {
        this.archivoTexto = archivoTexto;
    }

    public  leerArchivo (): Libro[] {
        let arrayLibros:Libro[] = []
        let archivoLibros:string = fs.readFileSync(this.archivoTexto, "utf-8");
        let miLista:string[] = archivoLibros.split("\r\n");
        for (let i:number=0; i<miLista.length; i++) {
            let libro: string = miLista[i];
            let detalles: string[] = libro.split(",");
            let titulo: string = detalles[0];
            let autor: string = detalles[1];
            let isbn: number = parseInt(detalles[2]);
            let genero: string = detalles[3];
            let editorial: string = detalles[4];
            let libroNuevo: Libro = new Libro (titulo, autor, isbn, genero, editorial);
            arrayLibros.push(libroNuevo);
        }
        return arrayLibros;
    }
}


let lector: LectorArchivo = new LectorArchivo ("listalibros.txt");
let lista: Libro[] = lector.leerArchivo();
let miGestor: GestorLibros = new GestorLibros (lista);
console.log(miGestor);

let miLibro1: Libro = new Libro ("LaPalabraMasHermosa", "MargetMazzantini", 9788426417855, "NovelaRomantica", "Lumen");
miGestor.insertBook(miLibro1);
miGestor.searchBook();
console.log(miGestor);
miGestor.searchBook();
miGestor.modifyAutor("MargaretMazzantini");
miLibro1.setGenero("Novela");
console.log(miLibro1);