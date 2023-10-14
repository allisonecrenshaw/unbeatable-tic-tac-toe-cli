import { Board } from "./board.js";

export class Game {
    constructor(gameMode) {
        this.board = new Board();
        this.gameMode = gameMode;
        this.gameWon = false;
        this.winner = null;
    }

    play() {
        console.log("Let's play tic taco toe.");

        const gameBoard = new Board();

        gameBoard.initializeBoard();

        gameBoard.displayBoard();
    }
}
