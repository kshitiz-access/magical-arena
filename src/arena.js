const Dice = require('./dice');

class Arena {
    constructor(playerA, playerB, diceSides) {
        if (diceSides < 1) {
            throw new Error('Dice must have at least one side');
        }
        this.playerA = playerA;
        this.playerB = playerB;
        this.attackingDice = new Dice(diceSides);
        this.defendingDice = new Dice(diceSides);
        this.round = 1;
    }

    fight() {
        let attacker, defender;
        if (this.playerA.health <= this.playerB.health) {
            attacker = this.playerA;
            defender = this.playerB;
        } else {
            attacker = this.playerB;
            defender = this.playerA;
        }

        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            console.log(`Round ${this.round}:`);
            this.turn(attacker, defender);
            [attacker, defender] = [defender, attacker]; // Swap roles after each turn
            this.round++;
        }
        return attacker.isAlive() ? attacker : defender;
    }

    turn(attacker, defender) {
        const attackRoll = this.attackingDice.roll();
        const defendRoll = this.defendingDice.roll();
        const attackDamage = attacker.attack * attackRoll;
        const defendDamage = defender.strength * defendRoll;
        const netDamage = Math.max(attackDamage - defendDamage, 0);

        console.log(`${attacker.name} rolls the dice: ${attackRoll}`);
        console.log(`${defender.name} rolls the dice: ${defendRoll}`);
        defender.reduceHealth(netDamage);
        console.log(`${attacker.name} has attacked ${defender.name} for ${netDamage} damage. ${defender.name}'s health is now ${defender.health}`);
    }
}

module.exports = Arena;
