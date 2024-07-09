const assert = require('assert');
const Player = require('../src/player');

describe('Player', function() {
    let player;

    beforeEach(function() {
        player = new Player('Test Player', 50, 5, 10);
    });

    it('should initialize with correct attributes', function() {
        assert.strictEqual(player.name, 'Test Player');
        assert.strictEqual(player.health, 50);
        assert.strictEqual(player.strength, 5);
        assert.strictEqual(player.attack, 10);
    });

    it('should reduce health correctly', function() {
        player.reduceHealth(10);
        assert.strictEqual(player.health, 40);
    });

    it('should not have negative health', function() {
        player.reduceHealth(100);
        assert.strictEqual(player.health, 0);
    });

    it('should correctly identify if alive', function() {
        assert(player.isAlive());
        player.reduceHealth(100);
        assert(!player.isAlive());
    });
});
