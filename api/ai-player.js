import { Player } from './player.js';
import { Coordinate } from './coordinate.js';
import * as constants from './constants.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
  }

  selectCoordinate(board) {
    let unoccupiedCoordinates = this.getUnoccupiedCellCoordinates(board);
    let bestCoordinate = unoccupiedCoordinates[0];
    return bestCoordinate;
  }

  getUnoccupiedCellCoordinates(board) {
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
}
