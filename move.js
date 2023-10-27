export class Move {
	constructor(player, coordinate) {
		this.player = player;
		this.coordinate = coordinate;
	}

	transformXCoordinateIntoIndex(coordinate) {
		if (coordinate == "A") {
			return 0;
		} else if (coordinate == "B") {
			return 1;
		} else if (coordinate == "C") {
			return 2;
		} else {
			throw new Error("Invalid coordinate: x value invalid.");
		}
	}

	transformYCoordinateIntoIndex(coordinate) {
		if (coordinate == "1") {
			return 0;
		} else if (coordinate == "2") {
			return 1;
		} else if (coordinate == "3") {
			return 2;
		} else {
			throw new Error("Invalid coordinate: y value invalid.");
		}
	}
}
