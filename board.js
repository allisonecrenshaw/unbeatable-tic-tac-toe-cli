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
		console.log(
			`Will update board here with move ${move.coordinate.x}${move.coordinate.y} from player ${move.player.name}.`
		);
	}
}
