export class Board {
	initializeBoard() {
		this.cells = [
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "],
		];
	}

	displayBoard() {
		let line = "  -------------";
		let columnLabels = "    A   B   C";
		console.log();
		console.log(columnLabels);
		console.log(line);
		for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			let thisRow = this.cells[rowIndex];
			console.log(rowIndex + 1, "|", thisRow[0], "|", thisRow[1], "|", thisRow[2], "|");
		}
		console.log(line);
	}
}
