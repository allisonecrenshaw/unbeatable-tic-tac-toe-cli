import * as readlineSync from "readline-sync";

export function displayWelcomeAndGetGameMode() {
	displayWelcomeMessage();

	displayGameModeOptions();

	var gameMode = getGameMode();

	displayGameModeConfirmation(gameMode);

	return gameMode;
}

export function displayWelcomeMessage() {
	var line = "**************************";
	console.log();
	console.log(line);
	console.log("Welcomem to Tic Tac Toe!");
	console.log(line);
}

export function displayGameModeOptions() {
	console.log("\nYou can play against the computer or against a friend.");
}

export function getGameMode() {
	const gameMode = readlineSync.question(
		"\nPlease enter your preferred game mode (type 'computer' or 'friend'): "
	);
	return gameMode;
}

export function displayGameModeConfirmation(gameMode) {
	console.log(`\nYou have chosen to play in ${gameMode} mode.`);
}
