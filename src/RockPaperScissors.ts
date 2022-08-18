export type Person = {
    name: string
    person: 1 | 2
    score?: number
}

interface IRockPaperScissors {
    calculateScore(games: string[][]): string
}

export class RockPaperScissors implements IRockPaperScissors {
    private persons: Person[]

    constructor(persons: Person[]){
        this.persons = persons.map(person => ({...person, score: 0}))
    }

    private addScore(game: string[]){
        if(game[0] === game[1]){
            (this.persons[0].score as number) += 1;
            (this.persons[1].score as number) += 1;
        }
        if((game[0] === 'R' && game[1] === 'P') || (game[0] === 'P' && game[1] === 'S') || (game[0] === 'S' && game[1] === 'R')) (this.persons[1].score as number) += 1
        if((game[0] === 'R' && game[1] === 'S') || (game[0] === 'P' && game[1] === 'R') || (game[0] === 'S' && game[1] === 'P')) (this.persons[0].score as number) += 1
    }

    public calculateScore(games: string[][]){
        let result: string;
        for (const game of games) {
            this.addScore(game)
        }
        if((this.persons[0].score as number) === (this.persons[1].score as number)){
            result = 'Tie'
        } else {
            if((this.persons[0].score as number) > (this.persons[1].score as number)){
                result = this.persons[0].name
            } else {
                result = this.persons[1].name
            }    
        }

        return result
    }
}

