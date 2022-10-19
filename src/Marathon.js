"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
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
exports.Marathon = Marathon;
