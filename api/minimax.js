export class Minimax {
  findBestMove(potentialMoves, startingBoard) {
    let bestMove = potentialMoves[0];
    let thisMove = potentialMoves[0];

    for (
      let potentialMovesIndex = 0;
      potentialMovesIndex < potentialMoves.length;
      potentialMovesIndex++
    ) {
      thisMove = potentialMoves[potentialMovesIndex];
      if (this.currentBetterThanPrevious(thisMove, bestMove) === true) {
        bestMove = thisMove;
      }
    }
    return bestMove;
  }

  currentBetterThanPrevious(thisMove, previousBestMove) {
    let currentBetterThanPrevious = false;
    console.log(`Will test here for best coordinate.`);

    return currentBetterThanPrevious;
  }
}
