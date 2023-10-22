export class Move {
	constructor(player, coordinates) {
		const { isValid, row, column } = this.validateCoordinate(coordinates);

		if (!isValid) {
			throw new Error("Invalid coordinates.");
		}

		this.player = player;
		this.row = row;
		this.column = column;
	}

	isMoveValid(coordinates) {
		if (coordinates.length != 2) {
			return false;
		}

		const row = coordinates.charAt(0);
		const column = coordinates.charAt(1);

		const isValidRow = this.validateRow(row);
		const isValidColumn = this.validateColumn(column);

		return {
			isValid: isValidRow && isValidColumn,
			row,
			column,
		};
	}

	validateRow(row) {
		// Implement row validation logic
		// Return true if valid, false otherwise
	}

	validateColumn(column) {
		// Implement column validation logic
		// Return true if valid, false otherwise
	}
}
