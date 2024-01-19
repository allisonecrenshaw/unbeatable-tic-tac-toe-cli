import { Player } from './player.js';
import { Coordinate } from './coordinate.js';
import { SimulatedGame } from './simulated-game.js';
import { Move } from './move.js';
import * as constants from './constants.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
  }

  getAIPlayerCoordinate(gameCopy) {
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
      gameCopy.currentPlayer,
    );

    if (immediateWinCoordinate) {
      console.log('immediate win evaluated to true');
      return immediateWinCoordinate;
    }

    let opponentImmediateWinCoordinate = this.checkForImmediateWin(
      availableCoordinates,
      gameCopy,
      gameCopy.player1,
    );

    if (opponentImmediateWinCoordinate) {
      console.log('opponent immediate win is imminent. blocking.');
      return opponentImmediateWinCoordinate;
    }
  }

  checkForImmediateWin(availableCoordinates, gameCopy, player) {
    let simGame = new SimulatedGame(gameCopy);
    for (let i = 0; i < availableCoordinates.length; i++) {
      let thisCoordinate = availableCoordinates[i];
      simGame.executeMove(new Move(player, thisCoordinate));

      if (simGame.board.won === true) {
        return thisCoordinate;
      }
      simGame.board.resetCell(thisCoordinate);
    }
  }

  centerCoordinateIsAvailable(board) {
    return board.cellIsEmpty(constants.CENTER);
  }

  getAvailableCorner(board) {
    switch (true) {
      case board.cellIsEmpty(constants.TOP_LEFT_CORNER):
        return constants.TOP_LEFT_CORNER;
      case board.cellIsEmpty(constants.BOTTOM_LEFT_CORNER):
        return constants.BOTTOM_LEFT_CORNER;
      case board.cellIsEmpty(constants.TOP_RIGHT_CORNER):
        return constants.TOP_RIGHT_CORNER;
      case board.cellIsEmpty(constants.BOTTOM_RIGHT_CORNER):
        return constants.BOTTOM_RIGHT_CORNER;
      default:
        return false;
    }
  }
}
