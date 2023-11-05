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
        this.gameFinished = false;
        this.winner = null;
    }

    play() {
        console.log("\nLet's play!");

        this.board.initializeBoard();

        while (this.gameFinished === false) {
            this.board.displayBoard();
            this.takeTurn();
            this.currentPlayer = this.switchPlayer();
            this.gameFinished = this.isGameFinished(this.board);

            if (this.gameFinished == true) {
                console.log("Game is finished.");
            }
        }
    }

    takeTurn() {
        console.log(`\nIt's ${this.currentPlayer.name}'s turn.`);
        const enteredCoordinate = readlineSync.question(
            "\nPlease enter the coordinate for your move (ex: A1): "
        );
        const coordinate = new Coordinate(enteredCoordinate);

        if (coordinate) {
            const move = new Move(this.currentPlayer, coordinate);
            this.board.updateBoard(move);
        }
    }

    switchPlayer() {
        return this.currentPlayer === this.player1
            ? this.player2
            : this.player1;
    }

    isGameFinished() {
        let gameWon = this.gameWon();
        let boardFull = this.isBoardFull();

        if (gameWon == true || boardFull == true) {
            return true;
        }

        return false;
    }

    gameWon() {
        winner = this.hasWinningRow();
        this.checkColumns();
        this.checkDiagonals();
    }

    isBoardFull() {
        const cells = this.board.cells;

        for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
            // Need to check this function -- not looping past row 0.
            console.log(`Checking row ${rowIndex}`);
            for (
                let columnIndex = 0;
                columnIndex < cells[rowIndex].length;
                columnIndex++
            ) {
                console.log(`Checking row ${rowIndex}, column ${columnIndex}`);
                if (cells[rowIndex][columnIndex] == " ") {
                    console.log(
                        `Cell: row ${rowIndex}, column ${columnIndex} is empty.`
                    );
                    console.log(`Returning false -- board not full.`);
                    return false;
                }
            }

            return true;
        }

        return true;
    }

    hasWinningRow() {
        const cells = this.board.cells;

        for (let rowIndex = 0; rowIndex < cells.length; rowIndex++) {
            if (
                cells[rowIndex][0] != " " &&
                cells[rowIndex][0] == cells[rowIndex][1] &&
                cells[rowIndex][1] == cells[rowIndex][2]
            ) {
                return cells[rowIndex][0];
            } else {
                return null;
            }
        }
    }

    checkColumns() {
        console.log("Under construction - checkColumns.");
    }

    checkDiagonals() {
        console.log("Under construction - checkDiagonals.");
    }
}
