import * as readlineSync from "readline-sync";

export class Player {
	constructor(turnOrder, isAI, name) {
		this.turnOrder = turnOrder;

		this.isAI = isAI;

		if (isAI == true) {
			this.name = "The Computer";
		} else {
			this.name = name ?? `Player ${turnOrder}`;
		}
	}

	toString() {
		return `Player(name: ${this.name}, isAI: ${this.isAI}, playerOrder: ${this.playerOrder})`;
	}
}
