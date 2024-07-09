const assert = require('assert');
const Player = require('../src/player');
const Arena = require('../src/arena');
const Dice = require('../src/dice');

describe('Arena', function() {
    let playerA, playerB, arena;

    beforeEach(function() {
        playerA = new Player('Player A', 50, 5, 10);
        playerB = new Player('Player B', 100, 10, 5);
        arena = new Arena(playerA, playerB, 6);
    });

    it('should have players initialized correctly', function() {
        assert.strictEqual(arena.playerA.name, 'Player A');
        assert.strictEqual(arena.playerB.name, 'Player B');
    });

    it('should correctly perform a fight', function() {
        const winner = arena.fight();
        assert(winner.isAlive());
        assert(winner.name === 'Player A' || winner.name === 'Player B');
    });
});
