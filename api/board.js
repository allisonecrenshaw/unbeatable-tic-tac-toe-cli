export class Board {
	initializeBoard() {
		this.cells = [
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "],
		];

		this.rowLabels = ["A", "B", "C"];
	}

	displayBoard() {
		let line = "  -------------";
		let columnLabels = "    1   2   3";
		console.log();
		console.log(columnLabels);
		console.log(line);
		for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			let thisRow = this.cells[rowIndex];
			console.log(
				this.rowLabels[rowIndex],
				"|",
				thisRow[0],
				"|",
				thisRow[1],
				"|",
				thisRow[2],
				"|"
			);
		}
		console.log(line);
	}

	updateBoard(move) {
		let x = move.coordinate.x;
		let y = move.coordinate.y;

		this.cells[x][y] = move.player.symbol;
	}

	isBoardFull() {
		for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			for (let columnIndex = 0; columnIndex < this.cells[rowIndex].length; columnIndex++) {
				if (this.cells[rowIndex][columnIndex] == " ") {
					return false;
				}
			}
		}
		return true;
	}
}
