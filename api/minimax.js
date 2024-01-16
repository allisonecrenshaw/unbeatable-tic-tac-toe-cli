import { Move } from './move.js';
import { SimulatedGame } from './simulated-game.js';

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

      if (potentialOutcomes[0] === 'immediateWin') {
        return thisCoordinate;
      }
    }
    return bestCoordinate;
  }

  simulatePotentialOutcomes(thisCoordinate, simulatedGame) {
    let potentialOutcomes = [];
    let firstMove = new Move(simulatedGame.currentPlayer, thisCoordinate);
    simulatedGame.executeMove(firstMove);
    if (simulatedGame.board.won === true) {
      potentialOutcomes.push('immediateWin');
      return potentialOutcomes;
    }

    return potentialOutcomes;
  }
}
