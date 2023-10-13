export class Board {
	initializeBoard() {
		this.cells = [
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "],
		];
	}

	displayBoard() {
		var line = "  -------------";
		var columnLabels = "    A   B   C";
		console.log();
		console.log(columnLabels);
		console.log(line);
		for (var rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			var thisRow = this.cells[rowIndex];
			console.log(rowIndex + 1, "|", thisRow[0], "|", thisRow[1], "|", thisRow[2], "|");
		}
		console.log(line);
	}
}
