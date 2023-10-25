export class Coordinate {
	constructor(coordinate) {
		this.validateCoordinate(coordinate);
		this.x = coordinate.charAt(0);
		this.y = coordinate.charAt(1);
	}

	validateCoordinate(coordinate) {
		if (coordinate.length != 2) {
			throw new Error("Invalid coordinate: length should be 2.");
		}

		if (coordinate.isXValid != true) {
			throw new Error("Invalid coordinate: x value invalid.");
		}

		if (coordinate.isYValid != true) {
			throw new Error("Invalid coordinate: y value invalid.");
		}
	}

	isXValid(x) {
		if (x == "A" || x == "B" || x == "C") {
			return true;
		}
		return false;
	}

	isYValid(y) {
		if (y == "1" || y == "2" || y == "3") {
			return true;
		}
		return false;
	}
}
