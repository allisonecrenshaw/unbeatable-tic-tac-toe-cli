export class Coordinate {
  constructor(coordinateType, coordinateInput) {
    if (coordinateType === 'alphanumeric') {
      if (coordinateInput.length !== 2) {
        throw new CoordinateError(
          'Invalid Coordinate: Coordinate should only have two characters (ex: A1)',
        );
      } else {
        const [x, y] = coordinateInput.split('');
        this.x = this.transformXCoordinateIntoIndex(x);
        this.y = this.transformYCoordinateIntoIndex(y);
      }
    } else {
      this.x = coordinateInput[0];
      this.y = coordinateInput[1];
    }
  }

  transformXCoordinateIntoIndex(x) {
    if (x == 'A') {
      return 0;
    } else if (x == 'B') {
      return 1;
    } else if (x == 'C') {
      return 2;
    } else {
      throw new CoordinateError('Invalid Coordinate: x value invalid.');
    }
  }

  transformYCoordinateIntoIndex(coordinate) {
    if (coordinate == '1') {
      return 0;
    } else if (coordinate == '2') {
      return 1;
    } else if (coordinate == '3') {
      return 2;
    } else {
      throw new CoordinateError('Invalid Coordinate: y value invalid.');
    }
  }

  toString() {
    return `${this.x}, ${this.y}`;
  }

  isAdjacentTo(coordinate) {
    return (
      (this.x === coordinate.x && Math.abs(this.y - coordinate.y) === 1) ||
      (this.y === coordinate.y && Math.abs(this.x - coordinate.x) === 1)
    );
  }
}

export class CoordinateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CoordinateError';
  }
}
