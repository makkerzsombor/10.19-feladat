"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Calvinball_winner;
class Football {
    constructor(winner, date, cs1, cs2) {
        this.winner = winner;
        this.date = date;
        this.cs1 = cs1;
        this.cs2 = cs2;
    }
    result() {
        return 'Football match: ' + this.cs1 + '-' + this.cs2;
    }
}
class Marathon {
    constructor(winner, date, ido) {
        this.winner = winner;
        this.date = date;
        this.ido = ido;
    }
    result() {
        return 'Marathon: ' + Math.floor(this.ido / 60) + ' min ' + this.ido % 60 + ' s';
    }
}
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, void 0);
        __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        this.date = date;
        this.pont = Math.floor(Math.random() * 100) + 10;
    }
    set winner(winner) {
        if (winner == 'Calvin' || winner == 'Hobbes') {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    result() {
        return 'Calvinball: ' + this.pont + ' points';
    }
}
_Calvinball_winner = new WeakMap();
let meccsek = [
    new Football('Manchester', new Date(2002, 10, 2), 4, 2),
    new Football('Barcelona', new Date(1996, 6, 14), 1, 6),
    new Marathon('urusei yatsura', new Date(1978, 9, 24), 245),
    new Marathon('Jormungand', new Date(2012, 4, 11), 186),
    new Calvinball('Calvin', new Date(2022, 10, 19)),
    new Calvinball('Hobbes', new Date(2020, 8, 30)),
];
for (let i = 0; i < meccsek.length; i++) {
    console.log(meccsek[i].result());
}
