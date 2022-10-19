interface Results{
    winner: string;
    date: Date;
    
    result(): string;
}

class Football implements Results{
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

class Marathon implements Results{
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

class Calvinball implements Results{
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

let meccsek: Results[] = [
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