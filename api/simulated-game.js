import { Game } from './game.js';

export class SimulatedGame extends Game {
  constructor(game) {
    super(game.gameMode, game.player1, game.player2);

    this.board = game.board;
    this.currentPlayer = game.currentPlayer;
    this.finished = false;
    this.winningPlayer = null;
    this.executedMoves = [];
  }
}
