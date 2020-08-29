"use strict";
exports.__esModule = true;
var fs = require("fs");
var rs = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, isbn, genero, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.genero = genero;
        this.editorial = editorial;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getISBN = function () {
        return this.isbn;
    };
    Libro.prototype.setISBN = function (isbn) {
        this.isbn = isbn;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    return Libro;
}());
var GestorLibros = /** @class */ (function () {
    function GestorLibros(misLibros) {
        this.misLibros = misLibros;
    }
    GestorLibros.prototype.searchBook = function () {
        var search = rs.questionInt("Ingrese el ISBN del libro que desea buscar: ");
        for (var i = 0; i < this.misLibros.length; i++) {
            if (search == this.misLibros[i].getISBN()) {
                console.log("El libro buscado se encuentra en la lista. Titulo: " + this.misLibros[i].getTitulo());
                return i;
            }
        }
        console.log("El libro no se encuentra en la lista.");
        return -1;
    };
    GestorLibros.prototype.insertBook = function (libroNuevo) {
        this.misLibros.push(libroNuevo);
    };
    GestorLibros.prototype.modifyTitulo = function (titulo) {
        var found = this.searchBook();
        if (found >= 0) {
            this.misLibros[found].setTitulo(titulo);
        }
    };
    GestorLibros.prototype.modifyAutor = function (autor) {
        var found = this.searchBook();
        if (found >= 0) {
            this.misLibros[found].setAutor(autor);
        }
    };
    GestorLibros.prototype.modifyISBN = function (isbn) {
        var found = this.searchBook();
        if (found >= 0) {
            this.misLibros[found].setISBN(isbn);
        }
    };
    GestorLibros.prototype.modifyGenero = function (genero) {
        var found = this.searchBook();
        if (found >= 0) {
            this.misLibros[found].setGenero(genero);
        }
    };
    GestorLibros.prototype.modifyEditorial = function (editorial) {
        var found = this.searchBook();
        if (found >= 0) {
            this.misLibros[found].setEditorial(editorial);
        }
    };
    return GestorLibros;
}());
var arrayLibros = [];
function leerArchivo(arrayLibros, archivoTexto) {
    var archivoLibros = fs.readFileSync(archivoTexto, "utf-8");
    var miLista = archivoLibros.split("\r\n");
    for (var i = 0; i < miLista.length; i++) {
        var libro = miLista[i];
        var detalles = libro.split(",");
        var titulo = detalles[0];
        var autor = detalles[1];
        var isbn = parseInt(detalles[2]);
        var genero = detalles[3];
        var editorial = detalles[4];
        var libroNuevo = new Libro(titulo, autor, isbn, genero, editorial);
        arrayLibros.push(libroNuevo);
    }
    return arrayLibros;
}
var lista = leerArchivo(arrayLibros, "listalibros.txt");
var miGestor = new GestorLibros(lista);
console.log(miGestor);
var miLibro1 = new Libro("LaPalabraMasHermosa", "MargetMazzantini", 9788426417855, "NovelaRomantica", "Lumen");
miGestor.insertBook(miLibro1);
miGestor.searchBook();
console.log(miGestor);
miGestor.searchBook();
miGestor.modifyAutor("MargaretMazzantini");
miLibro1.setGenero("Novela");
console.log(miLibro1);
// class LectorLibro {
//     private nombreArchivo:string;
//     constructor (nombreArchivo) {
//         this.nombreArchivo = nombreArchivo;
//     }
//     public leer(): Libro[] {
//         return [
//             new Libro ("100añosdeSoledad", "Gabriel", 300, "novela", "ajsd"),
//             new Libro ("maslsak", "kasjdk", 230, "laks", "asd")
//         ];    
//     }
//     public leerTodo(): GestorLibros {
//         let libros:Libro[]= [];
//         // leer desde archivo y generara los libros}
//         libros.push(new Libro ("100añosdeSoledad", "Gabriel", 300, "novela", "ksd"));
//         libros.push(new Libro ("maslsak", "kasjdk", 230, "laks", "kas"));
//         return new GestorLibros (
//             libros
//         );
//     }
// }
// let miBiblioteca = new GestorLibros (
//     [
//         new Libro ("100añosdeSoledad", "Gabriel", 300, "novela", "asd"),
//         new Libro ("maslsak", "kasjdk", 230, "laks", "ksd")
//     ]
// );
// let lector = new LectorLibro("nolose");
// let miBiblio2: GestorLibros = lector.leerTodo();
// console.log(miBiblio2);
// let miBiblio3 = new GestorLibros (
//     lector.leer()
// );
