// Declaration
export class Board {
	initializeBoard() {
		this.cells = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
	}

	displayBoard() {
		console.log(" ___________ ");
		console.log("| X | X |   |");
		console.log("| O | X | O |");
		console.log("| O | X | O |");
		console.log(" ___________ ");
	}
}
