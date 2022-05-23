// console.log("Hello wawan");
// let a = 5;
// let b = 10;
// console.log(a + b);

// function tambah(x, y) {
//     return x + y;
// }
// console.log(tambah(10, 2));

// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("text.txt was copied to text.txt");

// const hero = require("superheroes");

// for (let i = 0; i < 10; i++) {
//     console.log(hero.random());
// }

const op = require("./module");


const moduleTitle = op.title;
const modulePenjumlahan = op.tambah(10, 6);
const modulePerkalian = op.kali(10, 9);

console.log(moduleTitle);
console.log(modulePenjumlahan);
console.log(modulePerkalian);

