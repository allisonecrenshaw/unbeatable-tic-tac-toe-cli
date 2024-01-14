import { Game } from './game.js';
import * as utilities from './utilities.js';

utilities.displayWelcomeMessage();

utilities.displayGameModeOptions();

let gameMode = utilities.getGameMode();

let player1 = utilities.createPlayer1();
let player2 = utilities.createPlayer2(gameMode, player1.name);

const game = new Game(gameMode, player1, player2);

game.play();
