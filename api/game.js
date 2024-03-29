import { Board } from './board.js';
import { Coordinate, CoordinateError } from './coordinate.js';
import { Move } from './move.js';
import * as constants from './constants.js';
import * as readlineSync from 'readline-sync';
import _ from 'lodash';

export class Game {
  constructor(gameMode, player1, player2) {
    this.board = new Board();
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameMode = gameMode;
    this.finished = false;
    this.winningPlayer = null;
  }

  play() {
    this.displayGameStartMessage();

    this.board.initialize();

    while (this.finished === false) {
      this.board.display();

      this.executeTurn();

      if (this.board.won === true || this.board.allCellsOccupied()) {
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
    this.executeMove(move);
  }

  getMove() {
    if (this.currentPlayer.isAI === false) {
      return this.getValidMoveFromUser();
    }

    return new Move(this.currentPlayer, this.currentPlayer.getAIMoveCoordinate(_.cloneDeep(this)));
  }

  getValidMoveFromUser() {
    for (let moveAttempts = 0; moveAttempts < constants.MAX_INPUT_ATTEMPTS; moveAttempts++) {
      const coordinateInput = readlineSync.question(
        `\nPlease enter the coordinate for your move (ex: A1): `,
      );

      try {
        const coordinate = new Coordinate('alphanumeric', coordinateInput);

        let moveIsValid;
        if (coordinate) {
          moveIsValid = this.validateMove(coordinate);
        }

        if (moveIsValid === true) {
          return new Move(this.currentPlayer, coordinate);
        } else {
          console.log(`Your entered coordinate is already occupied.`);
          console.log(`Please try again.`);
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

  executeMove(move) {
    this.board.placeSymbol(move);
    this.board.updateWinState();
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
    return this.board.winningSymbol === this.player1.symbol ? this.player1 : this.player2;
  }
}
