import { Player } from './player.js';
import { Coordinate } from './coordinate.js';
import * as constants from './constants.js';
import * as minimax from './minimax.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
  }

  selectCoordinate(board) {
    let unoccupiedCoordinates = this.getUnoccupiedCoordinates(board);
    let optimalCoordinate = selectOptimalCoordinate(unoccupiedCoordinates);
    return optimalCoordinate;
  }

  getUnoccupiedCoordinates(board) {
    let unoccupiedCoordinates = [];

    console.log(`Getting available coordinates.`);
    for (let rowIndex = 0; rowIndex < constants.NUM_OF_ROWS; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < constants.NUM_OF_COLUMNS;
        columnIndex++
      ) {
        if (board.cells[rowIndex][columnIndex] === ' ') {
          let coordinateArray = [rowIndex, columnIndex];
          let coordinate = new Coordinate('array', coordinateArray);
          unoccupiedCoordinates.push(coordinate);
        }
      }
    }

    return unoccupiedCoordinates;
  }

  selectOptimalCoordinate(coordinates) {
    let optimalCoordinate = coordinates[0];
    let thisCoordinate = coordinates[0];

    for (
      let coordinateIndex = 0;
      coordinateIndex < coordinates.length;
      coordinateIndex++
    ) {
      thisCoordinate = coordinates[coordinateIndex];
      if (
        currentBetterThanPrevious(thisCoordinate, optimalCoordinate) === true
      ) {
        optimalCoordinate = thisCoordinate;
      }
    }
    return optimalCoordinate;
  }

  currentBetterThanPrevious(thisCoordinate, optimalCoordinate) {
    let currentBetterThanPrevious = false;
    console.log(`Will test here for best coordinate.`);

    return currentBetterThanPrevious;
  }
}
