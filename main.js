import { Player } from "./player.js";
import { Game } from "./game.js";
import * as utilities from "./utilities.js";
import * as readlineSync from "readline-sync";

var gameMode = utilities.displayWelcomeAndGetGameMode();

let player1Name = readlineSync.question(`\nEnter a name for Player 1: `);

let player1 = new Player(1, false, player1Name);
let player2;

if (gameMode == "friend") {
	let player2Name = readlineSync.question(`\nEnter a name for Player 2: `);
	player2 = new Player(2, false, player2Name);
} else if (gameMode == "computer") {
	player2 = new Player(2, true);
} else {
	console.log("Invalid game mode. Closing the game.");
	process.exit(1);
}

const game = new Game(gameMode, player1, player2);

game.play();
