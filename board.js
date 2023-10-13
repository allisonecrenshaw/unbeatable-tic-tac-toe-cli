// Declaration
export class Board {
	initializeBoard() {
		this.cells = [
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "],
			// ["X", "X", "X"],
			// ["X", "X", "X"],
			// ["X", "X", "X"],
		];
	}

	displayBoard() {
		var line = "-------------";
		console.log(line);
		for (var rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			var thisRow = this.cells[rowIndex];
			console.log("|", thisRow[0], "|", thisRow[1], "|", thisRow[2], "|");
		}
		console.log(line);
	}
}
