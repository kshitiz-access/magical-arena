class Dice {
    constructor(sides) {
        if (!Number.isInteger(sides) || sides < 1) {
            throw new Error('Sides must be a positive integer');
        }
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

module.exports = Dice;
