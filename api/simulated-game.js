import { Game } from './game.js';

export class SimulatedGame extends Game {
  constructor(game) {
    this.board = game.board;
    this.player1 = game.player1;
    this.player2 = game.player2;
    this.currentPlayer = game.currentPlayer;
    this.playerMode = playerMode;
    this.finished = false;
    this.winningPlayer = null;
    this.executedMoves = [];
  }
}
