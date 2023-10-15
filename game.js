import { Board } from "./board.js";

export class Game {
    constructor(gameMode) {
        this.board = new Board();
        this.gameMode = gameMode;
        this.gameWon = false;
        this.winner = null;
    }

    play() {
        console.log("Let's play!");

        const gameBoard = new Board();

        gameBoard.initializeBoard();

        if (this.gameMode == "computer") {
            this.playAIMode();
        } else if (this.gameMode == "friend") {
            this.playFriendMode();
        } else {
            console.log("Invalid input. Goodbye.");
        }
        // gameBoard.displayBoard();
    }

    playAIMode() {
        console.log("Computer mode coming soon.");
    }

    playFriendMode() {
        console.log("Friend mode goes here.");
    }
}
