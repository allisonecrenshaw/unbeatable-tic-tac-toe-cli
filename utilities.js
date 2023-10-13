import * as readlineSync from "readline-sync";

export function displayGameModeMessage() {
	console.log("Welcomem to Tic Taco Toe!");
	console.log("You can play against the computer or against a friend.");
}

export function getGameMode() {
	const gameMode = readlineSync.question(
		"Please enter your preferred game mode (type 'computer' or 'friend'): "
	);
	return gameMode;
}
