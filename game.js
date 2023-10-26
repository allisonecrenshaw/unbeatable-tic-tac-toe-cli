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

		this.board.displayBoard();

		this.playerTurn(this.currentPlayer);
	}

	playerTurn(currentPlayer) {
		console.log(`\nIt's ${this.currentPlayer.name}'s turn.`);
		const enteredCoordinate = readlineSync.question(
			"\nPlease enter the coordinate for your move (ex: A1): "
		);
		const coordinate = new Coordinate(enteredCoordinate);
		console.log(coordinate);

		if (coordinate) {
			const move = new Move(currentPlayer, coordinate);
			this.board.updateBoard(move);
		}
	}
}
