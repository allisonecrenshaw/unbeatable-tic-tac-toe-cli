export class Game {
	constructor(numOfPlayers) {
		this.board = new Board();
		this.numOfPlayers = numOfPlayers;
		this.gameWon = false;
		this.winner = null;
	}
}
