export class Coordinate {
  constructor(coordinateInput, coordinateType) {
    if (coordinateInput.length !== 2) {
      throw new CoordinateError(
        'Invalid Coordinate: Coordinate should only have two characters (ex: A1)',
      );
    }

    const [x, y] = coordinateInput.split('');

    if (coordinateType === 'alphanumeric') {
      this.x = this.transformXCoordinateIntoIndex(x);
      this.y = this.transformYCoordinateIntoIndex(y);
    } else {
      this.x = x;
      this.y = y;
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
}

export class CoordinateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CoordinateError';
  }
}
