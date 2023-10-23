import { Board } from "./board.js";
import * as readlineSync from "readline-sync";

export class Game {
	constructor(gameMode, player1, player2) {
		this.board = new Board();
		this.player1 = player1;
		this.player2 = player2;
		this.currentPlayer = player1;
		this.gameMode = gameMode;
		this.gameWon = false;
		this.winner = null;
	}

	play() {
		console.log("\nLet's play!");

		this.board.initializeBoard();

		this.board.displayBoard();

		this.playerTurn();
	}

	playerTurn() {
		console.log(`\nIt's ${this.currentPlayer.name}'s turn.`);
		const move = readlineSync.question(
			"\nPlease enter the coordinate for your move (ex: A1): "
		);

		// if (this.board.isMoveValid(move)) {
		// 	this.board.updateBoard(move);
		// } else {
		// 	console.log("Move is not valid.");
		// }
	}
}
