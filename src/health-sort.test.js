import { sortHeroesByHealth } from './health-sort'; 

describe('sortHeroesByHealth', () => {
    it('should sort heroes by health in descending order', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];

        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ];

        const result = sortHeroesByHealth(heroes);
        expect(result).toEqual(expected); 
    });

    it('should return an empty array if input is not an array', () => {
        expect(sortHeroesByHealth(null)).toEqual([]);
        expect(sortHeroesByHealth(undefined)).toEqual([]);
        expect(sortHeroesByHealth(123)).toEqual([]);
        expect(sortHeroesByHealth('string')).toEqual([]);
    });

    it('should not modify the original array', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];
        const originalHeroes = [...heroes]; 

        sortHeroesByHealth(heroes);

        expect(heroes).toEqual(originalHeroes); 
    });

    it('should handle an empty array', () => {
        expect(sortHeroesByHealth([])).toEqual([]);
    });

    it('should handle heroes with the same health', () => {
        const heroes = [
            { name: 'A', health: 50 },
            { name: 'B', health: 50 },
            { name: 'C', health: 50 },
        ];

        const result = sortHeroesByHealth(heroes);
        expect(result).toEqual(heroes); // Порядок должен остаться прежним, так как здоровье одинаковое.
    });
});