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

	isMoveValid(move) {
		if (move.length != 2) {
			return false;
		}

		let firstChar = move.charAt(0);

		if (firstChar != "A" && firstChar != "B" && firstChar != "C") {
			return false;
		}

		let secondChar = move.charAt(1);

		if (secondChar != "1" && secondChar != "2" && secondChar != "3") {
			return false;
		}

		console.log("Move is valid, returning true.");
		return true;
	}

	updateBoard(move) {
		console.log(`Will update board here with move ${move}.`);
	}
}
