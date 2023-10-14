import { Board } from "./board.js";
import { Game } from "./game.js";
import * as utilities from "./utilities.js";

var gameMode = utilities.displayWelcomeAndGetGameMode();

const game = new Game(gameMode);

const gameBoard = new Board();
gameBoard.initializeBoard();

gameBoard.displayBoard();
