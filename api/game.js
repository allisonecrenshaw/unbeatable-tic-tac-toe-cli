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
    let move = this.getValidMove();
  }

  getValidMove() {
    let moveAttempts = 0;
    let moveIsValid = false;
    let coordinateInput;
    let coordinate = null;

    while (moveAttempts < MAX_MOVE_ATTEMPTS && moveIsValid === false) {
      coordinateInput = readlineSync.question(
        `\nPlease enter the coordinate for your move (ex: A1):`,
      );

      try {
        coordinate = new Coordinate(coordinateInput);
      } catch (error) {
        if (error instanceof CoordinateError) {
          console.error(error.message);
        } else {
          console.error(
            'An unexpected error occurred with the coordinate entry.',
          );
        }
      }

      if (coordinate) {
        moveIsValid = this.board.cellIsEmpty(coordinate);
        if (moveIsValid === false) {
          console.log(
            `${coordinateInput} is already occupied. Try entering a different coordinate.`,
          );
        } else {
          return new Move(this.currentPlayer, coordinate);
        }
      } else {
        console.log(`${coordinateInput} is not a valid coordinate. Try again.`);
      }

      moveAttempts++;
      if (moveAttempts === MAX_MOVE_ATTEMPTS) {
        console.log(`Max move attempts reached. Closing game now.`);
        process.exit(1);
      }
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
