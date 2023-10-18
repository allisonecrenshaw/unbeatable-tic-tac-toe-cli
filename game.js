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

		console.log(`Player 1: ${this.player1}`);
		console.log(`Player 2: ${this.player2}`);
		console.log(`Current player: ${this.currentPlayer}`);

		this.board.initializeBoard();

		this.playerTurn();
	}

	playerTurn() {
		console.log(`It's ${this.currentPlayer.name}'s turn.`);
		const move = readlineSync.question(
			"\nPlease enter the coordinate for your move (ex: A1): "
		);
		this.updateBoard(move);
	}

	updateBoard(move) {
		console.log(`Will update board here with ${this.currentPlayer.name}'s move ${move}.`);
	}
}
