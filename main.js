import { Player } from "./player.js";
import { Game } from "./game.js";
import * as utilities from "./utilities.js";

var gameMode = utilities.displayWelcomeAndGetGameMode();

let player1, player2;

if (gameMode == "friend") {
	player1 = await Player.initializePlayerFromCLI(1);
	player2 = await Player.initializePlayerFromCLI(2);
} else if (gameMode == "computer") {
	player1 = await Player.initializePlayerFromCLI(1);
	player2 = await Player.initializeAIPlayer(2);
} else {
	console.log("Invalid game mode. Closing the game.");
	process.exit(1);
}

const game = new Game(gameMode);

game.play();
