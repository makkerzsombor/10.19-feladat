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
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c;
    // Football
    (_a = document.getElementById('fHozzaad')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let csapat = (document.getElementById('fNev').value);
        let idoPont = (document.getElementById('fIdo').value);
        let cs1 = (document.getElementById('f1G').value);
        let cs2 = (document.getElementById('f2G').value);
        meccsek.push(new Football_1.Football(csapat, new Date(idoPont), parseInt(cs1), parseInt(cs2)));
        for (let i = 0; i < meccsek.length; i++) {
            console.log(meccsek[i].result());
        }
    });
    // Marathon
    (_b = document.getElementById('mHozzaad')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        let nev = (document.getElementById('mNev').value);
        let idoPont = (document.getElementById('mIdo').value);
        let ideje = (document.getElementById('mIdeje').value);
        meccsek.push(new Marathon_1.Marathon(nev, new Date(idoPont), parseInt(ideje)));
        for (let i = 0; i < meccsek.length; i++) {
            console.log(meccsek[i].result());
        }
    });
    // Calvin
    (_c = document.getElementById('cHozzaad')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        let nev = (document.getElementById('CH').value);
        let idoPont = (document.getElementById('cIdo').value);
        meccsek.push(new Calvinball_1.Calvinball(nev, new Date(idoPont)));
        for (let i = 0; i < meccsek.length; i++) {
            console.log(meccsek[i].result());
        }
    });
});
