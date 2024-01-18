import { Player } from './player.js';
import { Coordinate } from './coordinate.js';
import { SimulatedGame } from './simulated-game.js';
import { Move } from './move.js';
import * as constants from './constants.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
  }

  getAIChosenCoordinate(gameCopy) {
    let availableCoordinates = this.getAvailableCoordinates(gameCopy.board);

    return this.findCoordinateForBestMove(availableCoordinates, gameCopy);
  }

  getAvailableCoordinates(board) {
    let availableCoordinates = [];

    console.log(`Computer gathering available coordinates.`);
    for (let rowIndex = 0; rowIndex < constants.NUM_OF_ROWS; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < constants.NUM_OF_COLUMNS;
        columnIndex++
      ) {
        if (board.cells[rowIndex][columnIndex] === ' ') {
          let coordinateArray = [rowIndex, columnIndex];
          let coordinate = new Coordinate('array', coordinateArray);
          availableCoordinates.push(coordinate);
        }
      }
    }

    return availableCoordinates;
  }

  findCoordinateForBestMove(availableCoordinates, gameCopy) {
    let immediateWinCoordinate = this.checkForImmediateWin(
      availableCoordinates,
      gameCopy,
    );
    if (immediateWinCoordinate) {
      console.log('immediate win evaluated to true');
      return immediateWinCoordinate;
    }

    if (gameCopy.board.cellIsEmpty(constants.CENTER_COORDINATE)) {
      return constants.CENTER_COORDINATE;
    }
  }

  checkForImmediateWin(availableCoordinates, gameCopy) {
    let simGame = new SimulatedGame(gameCopy);
    for (let i = 0; i < availableCoordinates.length; i++) {
      let thisCoordinate = availableCoordinates[i];
      simGame.executeMove(new Move(simGame.currentPlayer, thisCoordinate));

      if (simGame.board.won === true) {
        return thisCoordinate;
      }
      simGame.board.resetCell(thisCoordinate);
    }
  }
}
