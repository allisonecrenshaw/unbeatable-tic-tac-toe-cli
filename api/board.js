import { Coordinate } from './coordinate.js';
import { COL_COUNT, ROW_COUNT } from './constants.js';

export class Board {
  initialize() {
    this.cells = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    this.rowLabels = ['A', 'B', 'C'];
    this.won = false;
    this.winningSymbol = null;
  }

  display() {
    let line = '  -------------';
    let columnLabels = '    1   2   3';
    console.log();
    console.log(columnLabels);
    console.log(line);
    for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
      let thisRow = this.cells[rowIndex];
      console.log(this.rowLabels[rowIndex], '|', thisRow[0], '|', thisRow[1], '|', thisRow[2], '|');
    }
    console.log(line);
  }

  placeSymbol(move) {
    this.cells[move.coordinate.x][move.coordinate.y] = move.player.symbol;
  }

  resetCell(coordinate) {
    this.cells[coordinate.x][coordinate.y] = ' ';
  }

  allCellsOccupied() {
    for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < this.cells[rowIndex].length; columnIndex++) {
        if (this.cells[rowIndex][columnIndex] === ' ') {
          return false;
        }
      }
    }
    return true;
  }

  updateWinState() {
    this.setWinningSymbol();

    if (this.winningSymbol !== null) {
      this.won = true;
    } else if (this.allCellsOccupied()) {
      this.winningSymbol = 'tie';
    }
  }

  setWinningSymbol() {
    let winningRowSymbol = this.getWinningRowSymbol();
    if (winningRowSymbol !== null) {
      this.winningSymbol = winningRowSymbol;
      return;
    }

    let winningColumnSymbol = this.getWinningColumnSymbol();
    if (winningColumnSymbol !== null) {
      this.winningSymbol = winningColumnSymbol;
      return;
    }

    let winningDiagonalSymbol = this.getWinningDiagonalSymbol();
    if (winningDiagonalSymbol !== null) {
      this.winningSymbol = winningDiagonalSymbol;
      return;
    }

    return;
  }

  getWinningRowSymbol() {
    for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
      if (
        this.cells[rowIndex][0] !== ' ' &&
        this.cells[rowIndex][0] === this.cells[rowIndex][1] &&
        this.cells[rowIndex][1] === this.cells[rowIndex][2]
      ) {
        return this.cells[rowIndex][0];
      }
    }
    return null;
  }

  getWinningColumnSymbol() {
    for (let columnIndex = 0; columnIndex < this.cells.length; columnIndex++) {
      if (
        this.cells[0][columnIndex] !== ' ' &&
        this.cells[0][columnIndex] === this.cells[1][columnIndex] &&
        this.cells[1][columnIndex] === this.cells[2][columnIndex]
      ) {
        return this.cells[0][columnIndex];
      }
    }
    return null;
  }

  getWinningDiagonalSymbol() {
    if (
      this.cells[0][0] !== ' ' &&
      this.cells[0][0] === this.cells[1][1] &&
      this.cells[1][1] === this.cells[2][2]
    ) {
      return this.cells[0][0];
    } else if (
      this.cells[0][2] !== ' ' &&
      this.cells[0][2] === this.cells[1][1] &&
      this.cells[1][1] === this.cells[2][0]
    ) {
      return this.cells[0][2];
    } else {
      return null;
    }
  }

  cellIsEmpty(coordinate) {
    if (this.cells[coordinate.x][coordinate.y] === ' ') {
      return true;
    }
    return false;
  }

  getAvailableCoordinates() {
    let availableCoordinates = [];

    for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
      for (let columnIndex = 0; columnIndex < COL_COUNT; columnIndex++) {
        if (this.cells[rowIndex][columnIndex] === ' ') {
          let coordinateArray = [rowIndex, columnIndex];
          let coordinate = new Coordinate('array', coordinateArray);
          availableCoordinates.push(coordinate);
        }
      }
    }

    return availableCoordinates;
  }
}
