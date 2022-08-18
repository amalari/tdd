import { RockPaperScissors, Person } from "./RockPaperScissors";

describe('RPS', () => {
    test('should abigail win', () => {
        const players: Person[] = [{
            name: 'Abigail',
            person: 1
        }, {
            name: 'Benson',
            person: 2
        }];
        const rps = new RockPaperScissors(players);
        expect(rps.calculateScore([["R", "P"], ["R", "S"], ["S", "P"]])).toBe('Abigail');
    });
    
    test('should be Tie', () => {
        const players : Person[] = [{
            name: 'Abigail',
            person: 1
        }, {
            name: 'Benson',
            person: 2
        }];
        const rps = new RockPaperScissors(players);
        expect(rps.calculateScore([["R", "R"], ["S", "S"]])).toBe('Tie');
    });
    
    test('should be Tie', () => {
        const players : Person[] = [{
            name: 'Abigail',
            person: 1
        }, {
            name: 'Benson',
            person: 2
        }]
        const rps = new RockPaperScissors(players)
        expect(rps.calculateScore([["S", "R"], ["R", "S"], ["R", "R"]])).toBe('Tie');
    });

    test('should be Tie', () => {
        const players : Person[] = [{
            name: 'Abigail',
            person: 1
        }, {
            name: 'Benson',
            person: 2
        }]
        const rps = new RockPaperScissors(players)
        expect(rps.calculateScore([["S", "R"], ["R", "S"], ["R", "R"], ["S", "R"]])).toBe('Benson');
    });
    
  });