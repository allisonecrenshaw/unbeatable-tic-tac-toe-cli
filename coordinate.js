export class Coordinate {
	constructor(coordinate) {
		if (coordinate.length !== 2) {
			throw new Error("Invalid coordinate: length should be 2.");
		}

		const [x, y] = coordinate.split("");
		this.validateCoordinate(x, y);

		this.x = x;
		this.y = y;
	}

	validateCoordinate(x, y) {
		if (!this.isXValid(x)) {
			throw new Error("Invalid coordinate: x value invalid.");
		}

		if (!this.isYValid(y)) {
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
