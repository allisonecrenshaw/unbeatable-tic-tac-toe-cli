import { Board } from "./board.js";
import { Coordinate } from "./coordinate.js";
import { Move } from "./move.js";
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

		while (this.gameWon === false) {
			this.board.displayBoard;
			this.takeTurn();
			this.currentPlayer = this.switchPlayer();
		}
	}

	takeTurn() {
		console.log(`\nIt's ${this.currentPlayer.name}'s turn.`);
		const enteredCoordinate = readlineSync.question(
			"\nPlease enter the coordinate for your move (ex: A1): "
		);
		const coordinate = new Coordinate(enteredCoordinate);

		if (coordinate) {
			const move = new Move(currentPlayer, coordinate);
			this.board.updateBoard(move);
		}
	}

	switchPlayer() {
		return this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}
}
