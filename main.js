import { Player } from "./player.js";
import { Game } from "./game.js";
import * as utilities from "./utilities.js";

var gameMode = utilities.displayWelcomeAndGetGameMode();

let player1, player2;

player1 = Player.initializePlayerFromCLI(1);

if (gameMode == "friend") {
	player2 = Player.initializePlayerFromCLI(2);
} else if (gameMode == "computer") {
	player2 = Player.initializeAIPlayer(2);
} else {
	console.log("Invalid game mode. Closing the game.");
	process.exit(1);
}

const game = new Game(gameMode);

game.play();
