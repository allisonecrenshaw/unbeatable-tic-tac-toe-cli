import { Player } from './player.js';
import { Coordinate } from './coordinate.js';
import * as constants from './constants.js';
import * as minimax from './minimax.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
    this.minimaxSolver = new minimax.Minimax();
  }

  selectCoordinate(board) {
    let potentialMoves = this.getUnoccupiedCoordinates(board);
    return this.minimaxSolver.findBestMove(potentialMoves, board);
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
}
