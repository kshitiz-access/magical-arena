const assert = require('assert');
const Dice = require('../src/dice');

describe('Dice', function() {
    it('should roll a value between 1 and the number of sides', function() {
        const dice = new Dice(6);
        for (let i = 0; i < 100; i++) {
            const roll = dice.roll();
            assert(roll >= 1 && roll <= 6);
        }
    });

    it('should return 1 when rolled with 1 side', function() {
        const dice = new Dice(1);
        for (let i = 0; i < 100; i++) {
            assert.strictEqual(dice.roll(), 1);
        }
    });

    it('should handle large numbers of sides correctly', function() {
        const sides = 1000;
        const dice = new Dice(sides);
        for (let i = 0; i < 100; i++) {
            const roll = dice.roll();
            assert(roll >= 1 && roll <= sides);
        }
    });

    it('should throw an error if sides is not a positive integer', function() {
        assert.throws(() => new Dice(0), /^Error: Sides must be a positive integer$/);
        assert.throws(() => new Dice(-1), /^Error: Sides must be a positive integer$/);
        assert.throws(() => new Dice('invalid'), /^Error: Sides must be a positive integer$/);
    });

    it('should not significantly degrade performance with a large number of sides', function() {
        const sides = 1000;
        const dice = new Dice(sides);
        const startTime = Date.now();
        for (let i = 0; i < 10000; i++) {
            dice.roll();
        }
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        assert(elapsedTime < 100, `Rolling ${sides}-sided dice 10000 times took too long: ${elapsedTime} ms`);
    });
});
