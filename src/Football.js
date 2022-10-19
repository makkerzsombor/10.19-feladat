"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Football = void 0;
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
exports.Football = Football;
