// Declaration
export class Board {
	initializeBoard() {
		this.cells = [
			// [null, null, null],
			// [null, null, null],
			// [null, null, null],
			["X", "X", "X"],
			["X", "X", "X"],
			["X", "X", "X"],
		];
	}

	displayBoard() {
		for (var rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			for (var columnIndex = 0; columnIndex < this.cells[rowIndex].length; columnIndex++) {
				if (columnIndex < this.cells[rowIndex].length - 1) {
					// console.log("| ", this.cells[rowIndex[columnIndex]]);
					console.log("| ", "X");
				} else {
					// console.log("| ", this.cells[rowIndex[columnIndex]], +" |");
					console.log("| ", "X", " |");
				}
			}
		}
	}
}
