import * as utilities from "./utilities.js";
import * as readlineSync from "readline-sync";

export class Player {
	constructor(name, isAI, turnOrder) {
		this.name = name;
		this.isAI = isAI;
		this.turnOrder = turnOrder;
	}

	static async initializePlayerFromCLI(playerNumber) {
		const name = readlineSync.question(`\nEnter player ${playerNumber}'s name: `);
		const isAI = false;

		const player = new Player(name, isAI, playerNumber);

		return player;
	}

	initializeAIPlayer(playerNumber) {
		this.name = "The Computer";
		this.isAI = true;
		this.playerOrder = 2;
	}
}
