import { Results } from "./Results";

export class Marathon implements Results{
    winner: string;
    date: Date;
    ido: number;

    constructor(winner: string, date: Date, ido: number){
        this.winner = winner;
        this.date = date;
        this.ido = ido;
    }

    result(): string {
        return 'Marathon: ' + Math.floor(this.ido / 60) + ' min ' + this.ido % 60 + ' s';
    }
}