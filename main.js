import { Game } from "./game.js";
import * as utilities from "./utilities.js";

let gameMode = utilities.displayWelcomeAndGetGameMode();

let player1 = utilities.createPlayer1();
let player2 = utilities.createPlayer2(gameMode);

const game = new Game(gameMode, player1, player2);

game.play();
