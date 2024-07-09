const readline = require('readline');
const Player = require('./player');
const Arena = require('./arena');

function askQuestion(rl, query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function getPlayerDetails(rl, playerNumber) {
    const name = await askQuestion(rl, `Enter name for player ${playerNumber}: `);
    const health = parseInt(await askQuestion(rl, `Enter health for player ${playerNumber}: `), 10);
    const strength = parseInt(await askQuestion(rl, `Enter strength for player ${playerNumber}: `), 10);
    const attack = parseInt(await askQuestion(rl, `Enter attack for player ${playerNumber}: `), 10);
    return new Player(name, health, strength, attack);
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const playerA = await getPlayerDetails(rl, 1);
    const playerB = await getPlayerDetails(rl, 2);
    const diceSides = parseInt(await askQuestion(rl, 'Enter number of sides for the dice: '), 10);

    rl.close();

    const arena = new Arena(playerA, playerB, diceSides);
    const winner = arena.fight();

    console.log(`${winner.name} has won the game!`);
}

module.exports = { main };

if (require.main === module) {
    main();
}
