"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calvinball_1 = require("./Calvinball");
const Football_1 = require("./Football");
const Marathon_1 = require("./Marathon");
let meccsek = [
    new Football_1.Football('Manchester', new Date(2002, 10, 2), 4, 2),
    new Football_1.Football('Barcelona', new Date(1996, 6, 14), 1, 6),
    new Marathon_1.Marathon('urusei yatsura', new Date(1978, 9, 24), 245),
    new Marathon_1.Marathon('Jormungand', new Date(2012, 4, 11), 186),
    new Calvinball_1.Calvinball('Calvin', new Date(2022, 10, 19)),
    new Calvinball_1.Calvinball('Hobbes', new Date(2020, 8, 30)),
];
for (let i = 0; i < meccsek.length; i++) {
    console.log(meccsek[i].result());
}
console.log();
console.log('Csak Calvin nyert:');
for (let i = 0; i < meccsek.length; i++) {
    if (meccsek[i].winner == 'Calvin') {
        console.log(meccsek[i].result());
    }
}
console.log();
console.log('Rendezett:');
meccsek.sort((a, b) => { return a.date.getTime() - b.date.getTime(); });
for (let i = 0; i < meccsek.length; i++) {
    console.log(meccsek[i].result());
}
