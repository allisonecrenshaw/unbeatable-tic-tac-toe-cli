import * as readlineSync from 'readline-sync';
import { Player } from './player.js';

export function displayWelcomeAndGetGameMode() {
  displayWelcomeMessage();

  displayGameModeOptions();

  var gameMode = getGameMode();

  displayGameModeConfirmation(gameMode);

  return gameMode;
}

export function displayWelcomeMessage() {
  var line = '**************************';
  console.log();
  console.log(line);
  console.log('Welcome to Tic Tac Toe!');
  console.log(line);
}

export function displayGameModeOptions() {
  console.log('\nYou can play against the computer or against a friend.');
}

export function getGameMode() {
  const gameMode = readlineSync.question(
    "\nPlease enter your preferred game mode (type 'computer' or 'friend'): ",
  );
  return gameMode;
}

export function displayGameModeConfirmation(gameMode) {
  if (gameMode == 'friend' || gameMode == 'computer') {
    console.log(`\nYou have chosen to play in ${gameMode} mode.`);
  } else {
    console.log(`\n${gameMode} is not a valid game mode.`);
    console.log(`\nClosing the game. Goodbye`);
    process.exit(1);
  }
}

export function createPlayer1() {
  let player1Name = readlineSync.question(`\nEnter a name for Player 1: `);

  let player1 = new Player(1, false, player1Name);

  return player1;
}

export function createPlayer2(gameMode, player1Name) {
  let player2;

  if (gameMode === 'friend') {
    let player2Name = '';
    player2Name = readlineSync.question(`\nEnter a name for Player 2: `);
    while (arePlayerNamesSame(player1Name, player2Name)) {
      if (arePlayerNamesSame(player1Name, player2Name)) {
        console.log(`Player 1 already has name ${player2Name}.`);
        console.log(`Please enter a different name.`);
      }
      player2Name = readlineSync.question(`\nEnter a name for Player 2: `);
    }
    player2 = new Player(2, false, player2Name);
  } else if (gameMode == 'computer') {
    player2 = new Player(2, true);
  } else {
    console.log('Invalid game mode. Closing the game.');
    process.exit(1);
  }

  return player2;
}

export function arePlayerNamesSame(player1Name, player2Name) {
  return player1Name === player2Name ? true : false;
}
