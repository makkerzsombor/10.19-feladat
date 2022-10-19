import { Results } from "./Results";

export class Calvinball implements Results{
    #winner: string;
    date: Date;
    pont: number;
    constructor( winner: string, date: Date){
        this.#winner = winner;
        this.date = date;
        this.pont = Math.floor(Math.random()*100)+10;
    }

    set winner(winner: string){
        if (winner == 'Calvin' || winner == 'Hobbes') {
            this.#winner = winner;
        }
    }

    get winner():string{
        return this.#winner;
    }

    result(): string {
        return 'Calvinball: '+ this.pont +' points';
    }
}