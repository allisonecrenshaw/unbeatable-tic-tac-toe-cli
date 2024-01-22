import { Player } from './player.js';
import { Coordinate } from './coordinate.js';
import { Move } from './move.js';
import { COL_COUNT, ROW_COUNT } from './constants.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
  }

  getAIMoveCoordinate(gameCopy) {
    let availableCoords = gameCopy.board.getAvailableCoordinates();
    let self = this;
    let opp = this.turnOrder === 1 ? gameCopy.player2 : gameCopy.player1;

    let immediateWin = this.getImmediateWin(availableCoords, gameCopy, self);
    if (immediateWin) return immediateWin;

    let oppImmediateWin = this.getImmediateWin(availableCoords, gameCopy, opp);
    if (oppImmediateWin) return oppImmediateWin;

    return this.getBestCoordinateWithMinimax(gameCopy, self, opp);
  }

  getImmediateWin(availableCoords, gameCopy, player) {
    for (let i = 0; i < availableCoords.length; i++) {
      let thisCoordinate = availableCoords[i];
      gameCopy.executeMove(new Move(player, thisCoordinate));

      if (gameCopy.board.won === true) {
        return thisCoordinate;
      }
      gameCopy.board.resetCell(thisCoordinate);
    }
  }

  getBestCoordinateWithMinimax(gameCopy, self, opp) {
    console.log('Inside getBestCoordinateWithMinimax.');

    let bestScore = -Infinity; // start low so anything, even a negative value, registers as better
    let bestCoordinate = null;

    // loop through each available coordinate and traverse its tree, noting composite score of all potential outcomes
    for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
      for (let columnIndex = 0; columnIndex < COL_COUNT; columnIndex++) {
        let coordinate = new Coordinate('index', [rowIndex, columnIndex]);

        if (gameCopy.board.cellIsEmpty(coordinate)) {
          gameCopy.board.placeSymbol(new Move(self, coordinate));

          // traverse the tree
          let score = this.minimax(gameCopy, 0, false, self, opp);

          // reset each root node
          gameCopy.board.resetCell(coordinate);

          // replace best score if applicable
          if (score > bestScore) {
            bestScore = score;
            bestCoordinate = coordinate;
          }
        }
      }
    }

    console.log('bestcoordinate: ', bestCoordinate);
    return bestCoordinate;
  }

  minimax(gameCopy, depth, isMaximizing, self, opp) {
    console.log(`Calling minimax at depth ${depth}`);
    gameCopy.board.display();

    // assumes human player is X due to main.js structure
    // needs refactor if randomizing starting player
    let scores = { X: -1, O: 1, tie: 0 };

    gameCopy.board.updateWinState();
    if (gameCopy.board.winningSymbol !== null) {
      console.log(`Game is over in simulation.`);
      console.log(`Winner is ${gameCopy.board.winningSymbol}`);
      console.log(`Score: ${scores[gameCopy.board.winningSymbol]}`);

      let winningSymbol = gameCopy.board.winningSymbol;
      // reset won and winningSymbol on board for other iterations?
      gameCopy.board.won = false;
      gameCopy.board.winningSymbol = null;
      return winningSymbol;
    }

    let bestScore;
    let player;
    if (isMaximizing) {
      bestScore = -Infinity;
      player = self;
    } else {
      bestScore = Infinity;
      player = opp;
    }

    for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
      for (let columnIndex = 0; columnIndex < COL_COUNT; columnIndex++) {
        if (gameCopy.board.cells[rowIndex][columnIndex] === ' ') {
          let coordinate = new Coordinate('index', [rowIndex, columnIndex]);

          gameCopy.board.placeSymbol(new Move(player, coordinate));

          let score = this.minimax(gameCopy, depth + 1, !isMaximizing, self, opp);
          gameCopy.board.resetCell(coordinate);

          if (isMaximizing) {
            bestScore = Math.max(score, bestScore);
          } else {
            bestScore = Math.min(score, bestScore);
          }
        }
      }
    }
    console.log(`Best score in this loop of minimax is: ${bestScore}`);
    return bestScore;
  }
}
