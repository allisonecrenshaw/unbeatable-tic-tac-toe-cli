import { Game } from './game.js';
import * as utilities from './utilities.js';
import * as constants from './constants.js';
import { AIPlayer } from './ai-player.js';

utilities.displayWelcomeMessage();

utilities.displayGameModeOptions();

let gameMode = utilities.getGameMode();

let player1 = utilities.createPlayer1();

if (gameMode === constants.COMPUTER_MODE) {
  let player2 = new AIPlayer();
} else {
  let player2 = utilities.createPlayer2(gameMode, player1.name);
}

const game = new Game(gameMode, player1, player2);

game.play();
