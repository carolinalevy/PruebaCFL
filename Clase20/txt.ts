import * as fs from 'fs';

let texto: string = fs.readFileSync('abc.txt', 'utf8');

let palabras: string[] = texto.split(' ');
console.log(palabras);

let texto2: string= fs.readFileSync('otro.txt', 'utf8');
let arrayPalabras: string[] = texto2.split(' ');
console.log(arrayPalabras);