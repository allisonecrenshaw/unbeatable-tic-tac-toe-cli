import { Board } from "./board.js";

export class Game {
    constructor(playerMode, player1, player2) {
        this.board = new Board();
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.playerMode = playerMode;
        this.finished = false;
        this.winningPlayer = null;
    }

    play() {
        console.log("\nLet's play!");

        this.board.initialize();

        while (this.finished === false) {
            this.board.display();
            let moveExecuted = this.currentPlayer.takeTurn(this.board);

            if (this.board.won === true || this.board.full === true) {
                this.finished = true;
                this.board.display();
                this.printFinishMessage();
            } else if (moveExecuted === true) {
                this.currentPlayer = this.switchPlayer();
            }
        }
    }

    switchPlayer() {
        return this.currentPlayer === this.player1
            ? this.player2
            : this.player1;
    }

    isFinished() {
        if (this.board.won === true || this.board.isFull === true) {
            return true;
        }

        return false;
    }

    printFinishMessage() {
        if (this.board.won === true) {
            let winningPlayer = this.getWinningPlayer();
            console.log(`${winningPlayer.name} wins!`);
            return;
        }
        console.log("The board is full -- it's a tie!");
        console.log("Great job to both players.");
    }

    getWinningPlayer() {
        return this.board.winningSymbol === this.player1.symbol
            ? this.player1
            : this.player2;
    }
}
