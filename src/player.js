class Player {
    constructor(name, health, strength, attack) {
        if (health <= 0 || strength <= 0 || attack <= 0) {
            throw new Error('Health, strength, and attack must be positive integers');
        }
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    reduceHealth(damage) {
        this.health = Math.max(this.health - damage, 0);
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;
