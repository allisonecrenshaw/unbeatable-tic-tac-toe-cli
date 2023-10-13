import { Board } from "./board.js";
import { Game } from "./game.js";
import * as utilities from "./utilities.js";

utilities.displayGameModeMessage();
var gameMode = utilities.getGameMode();

const game = new Game(gameMode);

const gameBoard = new Board();
gameBoard.initializeBoard();

gameBoard.displayBoard();
