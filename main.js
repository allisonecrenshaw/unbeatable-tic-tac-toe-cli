import { Board } from "./board.js";
import { Game } from "./game.js";
import * as utilities from "./utilities.js";

var gameMode = utilities.displayWelcomeAndGetGameMode();

const game = new Game(gameMode);

game.play();
