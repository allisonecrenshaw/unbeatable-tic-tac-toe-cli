function getGameMode() {
	displayGameModeMessage();

	var gameMode = input("Please enter your preferred game mode (type 'computer' or 'friend'): ");
	return gameMode;
}

function displayGameModeMessage() {
	console.log("Welcomem to Tic Taco Toe!");
	console.log("You have two play options:");
	console.log("You can play against the computer or against a friend.");
}
