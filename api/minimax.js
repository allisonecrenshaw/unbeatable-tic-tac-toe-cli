import { Move } from './move.js';
import { SimulatedGame } from './simulated-game.js';

export class Minimax {
  findCoordinateForBestMove(availableCoords, gameCopy) {
    let simGame = new SimulatedGame(gameCopy);

    let bestCoordinate = availableCoords[0];
    let thisCoordinate = availableCoords[0];

    for (let i = 0; i < availableCoords.length; i++) {
      thisCoordinate = availableCoords[i];
      if (this.isImmediateWin(thisCoordinate, simGame) === true) {
        return thisCoordinate;
      }
      let outcomes = this.simulatePotentialOutcomes(thisCoordinate, simGame);
    }
    return bestCoordinate;
  }

  isImmediateWin(thisCoordinate, simGame) {
    simGame.executeMove(new Move(simGame.currentPlayer, thisCoordinate));
    if (simGame.board.won === true) {
      return true;
    }
    simGame.board.resetCell(thisCoordinate);
    return false;
  }

  simulatePotentialOutcomes(thisCoordinate, simGame) {
    let potentialOutcomes = [];
    return potentialOutcomes;
  }
}
