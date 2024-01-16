export class Minimax {
  findBestCoordinate(potentialCoordinates, startingBoard) {
    let bestCoordinate = potentialCoordinates[0];
    let thisCoordinate = potentialCoordinates[0];

    for (
      let potentialCoordinatesIndex = 0;
      potentialCoordinatesIndex < potentialCoordinates.length;
      potentialCoordinatesIndex++
    ) {
      thisCoordinate = potentialCoordinates[potentialCoordinatesIndex];
      let potentialOutcomes = gatherPotentialOutcomes(
        thisCoordinate,
        startingBoard,
      );
    }
    return bestCoordinate;
  }

  gatherPotentialOutcomes(thisCoordinate, startingBoard) {}
}
