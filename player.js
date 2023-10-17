import * as utilities from "./utilities.js";
import * as readlineSync from "readline-sync";

export class Player {
	static async initializePlayerFromCLI(playerNumber) {
		const name = readlineSync.question(`\nEnter player ${playerNumber}'s name: `);
		const isAI = false;

		const player = new Player();
		player.name = name;
		player.playerOrder = playerNumber;

		return player;
	}

	initializeAIPlayer(playerNumber) {
		this.name = "The Computer";
		this.isAI = true;
		this.playerOrder = 2;
	}
}
