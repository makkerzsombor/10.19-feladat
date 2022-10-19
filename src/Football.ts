import { Results } from "./Results";

export class Football implements Results {
    winner: string;
    date: Date;
    cs1: number;
    cs2: number;

    constructor(winner: string, date: Date, cs1: number, cs2: number){
        this.winner = winner;
        this.date = date;
        this.cs1 = cs1;
        this.cs2 = cs2;
    }

    result(): string {
        return 'Football match: '+ this.cs1 + '-' + this.cs2;
    }
}