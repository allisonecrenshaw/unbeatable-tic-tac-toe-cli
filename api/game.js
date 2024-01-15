import { Board } from './board.js';
import { Coordinate, CoordinateError } from './coordinate.js';
import { Move } from './move.js';
import * as utilities from './utilities.js';
import * as readlineSync from 'readline-sync';

const MAX_MOVE_ATTEMPTS = 3;

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
    this.displayGameStartMessage();

    this.board.initialize();

    while (this.finished === false) {
      this.board.display();

      this.executeTurn();

      if (this.board.won === true || this.board.allCellsOccupied === true) {
        this.finished = true;
        this.board.display();
        this.printFinishMessage();
      } else {
        this.currentPlayer = this.switchPlayer();
      }
    }
  }

  displayGameStartMessage() {
    let starLine = '***************';
    console.log();
    console.log(starLine);
    console.log(`Let's play!`);
    console.log(starLine);
  }

  executeTurn() {
    console.log(`It is ${this.currentPlayer.name}'s turn.`);
    let move = this.getMove();
    this.board.placeSymbol(move);
  }

  getMove() {
    if (this.currentPlayer.isAI === false) {
      return this.getValidMoveFromUser();
    }
    console.log(`Getting AI move.`);
  }

  getValidMoveFromUser() {
    for (
      let moveAttempts = 0;
      moveAttempts < MAX_MOVE_ATTEMPTS;
      moveAttempts++
    ) {
      const coordinateInput = readlineSync.question(
        `\nPlease enter the coordinate for your move (ex: A1): `,
      );

      try {
        const coordinate = new Coordinate(coordinateInput, 'alphanumeric');

        let moveIsValid;
        if (coordinate) {
          moveIsValid = this.validateMove(coordinate);
        }

        if (moveIsValid === true) {
          return new Move(this.currentPlayer, coordinate);
        } else {
          console.log(`${coordinate} is already occupied.`);
        }
      } catch (error) {
        console.error(this.getErrorMessage(error));
        console.log(`Please try again.`);
      }
    }

    console.log(`\nMax move attempts reached. Closing game now.`);
    process.exit(1);
  }

  validateMove(coordinate) {
    return this.board.cellIsEmpty(coordinate);
  }

  getErrorMessage(error) {
    if (error instanceof CoordinateError) {
      return error.message;
    } else {
      console.log(error);
      return 'An unexpected error occurred with the coordinate entry.';
    }
  }

  switchPlayer() {
    return this.currentPlayer === this.player1 ? this.player2 : this.player1;
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
    console.log('Great job to both players.');
  }

  getWinningPlayer() {
    return this.board.winningSymbol === this.player1.symbol
      ? this.player1
      : this.player2;
  }
}
