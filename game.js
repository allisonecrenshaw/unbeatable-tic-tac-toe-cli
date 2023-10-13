import { Board } from "./board.js";

export class Game {
	constructor(gameMode) {
		this.board = new Board();
		this.gameMode = gameMode;
		this.gameWon = false;
		this.winner = null;
	}
}
