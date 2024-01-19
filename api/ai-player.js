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
    console.log('Getting available moves.');
    let availableCoordinates = this.getAvailableCoordinates(gameCopy.board);

    console.log('Computer checking for possible wins.');
    let immediateWinCoordinate = this.checkForImmediateWin(
      availableCoordinates,
      gameCopy,
      gameCopy.currentPlayer,
    );

    if (immediateWinCoordinate) return immediateWinCoordinate;

    console.log('Computer checking for possible OPPONENT wins.');
    let opponentImmediateWinCoordinate = this.checkForImmediateWin(
      availableCoordinates,
      gameCopy,
      gameCopy.player1,
    );

    if (opponentImmediateWinCoordinate) return opponentImmediateWinCoordinate;

    console.log('Computer found no immediate win conditions.');
    console.log('Making call to findCoordinateForBestMove()');
    return this.findCoordinateForBestMove(gameCopy);
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

  findCoordinateForBestMove(gameCopy) {
    console.log('Inside findCoordinateForBestMove.');
    let bestScore = -Infinity;
    let bestCoordinate = null;

    for (let rowIndex = 0; rowIndex < constants.NUM_OF_ROWS; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < constants.NUM_OF_COLUMNS;
        columnIndex++
      ) {
        if (gameCopy.board.cells[rowIndex][columnIndex] === ' ') {
          let coordinate = new Coordinate('index', [rowIndex, columnIndex]);
          gameCopy.board.placeSymbol(
            new Move(gameCopy.currentPlayer, coordinate),
          );
          let score = this.minimax(gameCopy.board);
          gameCopy.board.resetCell(coordinate);

          if (score > bestScore) {
            bestScore = score;
            bestCoordinate = coordinate;
          }
        }
      }
    }

    console.log('bestcoordinate:', bestCoordinate);
    return bestCoordinate;
  }

  minimax(board) {
    return 1;
  }
}
