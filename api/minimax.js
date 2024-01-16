export class Minimax {
  findBestCoordinate(coordinates, startingBoard) {
    let optimalCoordinate = coordinates[0];
    let thisCoordinate = coordinates[0];

    for (
      let coordinateIndex = 0;
      coordinateIndex < coordinates.length;
      coordinateIndex++
    ) {
      thisCoordinate = coordinates[coordinateIndex];
      if (
        currentBetterThanPrevious(thisCoordinate, optimalCoordinate) === true
      ) {
        optimalCoordinate = thisCoordinate;
      }
    }
    return optimalCoordinate;
  }

  currentBetterThanPrevious(thisCoordinate, optimalCoordinate) {
    let currentBetterThanPrevious = false;
    console.log(`Will test here for best coordinate.`);

    return currentBetterThanPrevious;
  }
}
