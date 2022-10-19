interface Results{
    winner: string;
    date: Date;

    getWinner(): string;
    setWinner(): string;
    getDate(): Date;
    setDate(): Date;
    result(): string;
}

class Football implements Results{
    winner: string;
    date: Date;

    constructor(winner: string, date: Date){
        this.winner = winner;
        this.date = date;
    }

    getWinner(): string {
        throw new Error("Method not implemented.");
    }
    setWinner(): string {
        throw new Error("Method not implemented.");
    }
    getDate(): Date {
        throw new Error("Method not implemented.");
    }
    setDate(): Date {
        throw new Error("Method not implemented.");
    }
    result(): string {
        throw new Error("Method not implemented.");
    }

}
