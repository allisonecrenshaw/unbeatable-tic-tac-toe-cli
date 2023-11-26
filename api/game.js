import { Board } from "./board.js";
import { Coordinate } from "./coordinate.js";
import { Move } from "./move.js";
import * as readlineSync from "readline-sync";

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
            this.takeTurn();

            if (this.board.won === true || this.board.full === true) {
                this.finished = true;
            }

            if (this.finished === true) {
                this.board.display();
                this.printFinishMessage();
            }
        }
    }

    takeTurn() {
        console.log(`\nIt's ${this.currentPlayer.name}'s turn.`);

        let coordinate = null;
        let move;
        let moveIsValid = false;
        
        while(!coordinate && moveIsValid === false) {
            const enteredCoordinate = readlineSync.question(
                "\nPlease enter the coordinate for your move (ex: A1): "
            );
            coordinate = new Coordinate(enteredCoordinate);
            
            if (coordinate) {
                move = new Move(this.currentPlayer, coordinate, this.board);
                if(move.coordinateIsEmpty() === true) {
                    moveIsValid = true;
                    this.board.update(move);
                    this.currentPlayer = this.switchPlayer();
                } else {
                    console.log("This cell is occupied.");
                    console.log("Please choose a different cell.");
                }
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
