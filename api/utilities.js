import * as readlineSync from 'readline-sync';
import { Player } from './player.js';
import * as constants from './constants.js';

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
  const gameModeInput = getGameModeInput();
  if (gameModeInput === constants.FRIEND_MODE || gameModeInput === constants.COMPUTER_MODE) {
    console.log(`\nYou have chosen to play in ${gameModeInput} mode.`);
    return gameModeInput;
  }

  console.log(`You have entered an invalid game mode.`);
  console.log(`Defaulting to ${constants.DEFAULT_GAME_MODE} mode.`);
  return constants.DEFAULT_GAME_MODE;
}

export function getGameModeInput() {
  return readlineSync.question(
    `\nPlease enter your preferred game mode (type ${constants.FRIEND_MODE} or ${constants.COMPUTER_MODE}): `,
  );
}

export function createPlayer1() {
  let player1Name = readlineSync.question(`\nEnter a name for Player 1: `);

  let player1 = new Player(1, false, player1Name);

  return player1;
}

export function createPlayer2(gameMode, player1Name) {
  let player2Name = '';

  for (let moveAttempts = 0; moveAttempts < constants.MAX_INPUT_ATTEMPTS; moveAttempts++) {
    player2Name = readlineSync.question(`\nEnter a name for Player 2: `);
    if (arePlayerNamesSame(player1Name, player2Name) === true) {
      console.log(`Error: Input name for player 2 is same as player 1. Try again.`);
    }
    return new Player(2, false, player2Name);
  }
}

export function arePlayerNamesSame(player1Name, player2Name) {
  return player1Name === player2Name ? true : false;
}
