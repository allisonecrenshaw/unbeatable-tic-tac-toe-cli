import { SimulatedGame } from './simulated-game.js';
import { Move } from './move.js';

export class Minimax {
  findCoordinateForBestMove(availableCoordinates, gameCopy) {
    let simulatedGame = new SimulatedGame(gameCopy);

    let bestCoordinate = availableCoordinates[0];
    let thisCoordinate = availableCoordinates[0];

    for (
      let availableCoordinatesIndex = 0;
      availableCoordinatesIndex < availableCoordinates.length;
      availableCoordinatesIndex++
    ) {
      thisCoordinate = availableCoordinates[availableCoordinatesIndex];
      let potentialOutcomes = this.simulatePotentialOutcomes(
        thisCoordinate,
        simulatedGame,
      );
    }
    return bestCoordinate;
  }

  simulatePotentialOutcomes(thisCoordinate, simulatedGame) {
    let firstMove = new Move(simulatedGame.currentPlayer, thisCoordinate);
    simulatedGame.executeMove(firstMove);
    simulatedGame.board.displayBoard();
  }
}
