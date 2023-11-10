export class Board {
	initialize() {
		this.cells = [
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "],
		];

		this.rowLabels = ["A", "B", "C"];
		this.won = false;
		this.winnerSymbol = null;
		this.full = false;
	}

	display() {
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

	update(move) {
		this.updateCells(move);
		this.setIsFull();
		this.setWonStateAndWinningSymbol();
	}

	updateCells(move) {
		let x = move.coordinate.x;
		let y = move.coordinate.y;

		this.cells[x][y] = move.player.symbol;
	}

	setIsFull() {
		this.full = this.isFull();
	}

	isFull() {
		for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			for (let columnIndex = 0; columnIndex < this.cells[rowIndex].length; columnIndex++) {
				if (this.cells[rowIndex][columnIndex] == " ") {
					return false;
				}
			}
		}
		return true;
	}

	setWonStateAndWinningSymbol() {
		console.log("Calling board.setWonStateAndWinningSymbol()");
		let winningRowSymbol = this.getWinningRowSymbol();
		let winningColumnSymbol = this.getWinningColumnSymbol();
		let winningDiagonalSymbol = this.getWinningDiagonalSymbol();

		if (winningRowSymbol != null) {
			console.log("Setting board.won as true and setting winningSymbol from winning row.");
			this.won = true;
			this.winningSymbol(winningRowSymbol);
		}

		if (winningColumnSymbol != null) {
			console.log("Setting board.won as true and setting winningSymbol from winning column.");
			this.won = true;
			this.winningSymbol(winningColumnSymbol);
		}

		if (winningDiagonalSymbol != null) {
			console.log("Setting board.won as true and setting winningSymbol from winning diag.");
			this.won = true;
			this.winningSymbol(winningDiagonalSymbol);
		}
	}

	getWinningRowSymbol() {
		for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
			if (
				this.cells[rowIndex][0] != " " &&
				this.cells[rowIndex][0] == this.cells[rowIndex][1] &&
				this.cells[rowIndex][1] == this.cells[rowIndex][2]
			) {
				console.log("Returning winning row symbol.");
				return this.cells[rowIndex][0];
			}

			return null;
		}
	}

	getWinningColumnSymbol() {
		console.log("Under construction - getWinningColumn.");
	}

	getWinningDiagonalSymbol() {
		console.log("Under construction - getWinningDiagonal.");
	}

	setWinner() {}
}
