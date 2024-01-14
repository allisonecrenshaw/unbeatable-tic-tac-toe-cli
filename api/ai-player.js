import { Player } from './player';

export class AIPlayer extends Player {
  takeTurn() {
    console.log(`\nIt's the computer's turn.`);
  }

  getUnoccupiedCellCoordinates(board) {
    console.log(`Getting available coordinates.`);
    for (let rowIndex = 0; rowIndex <= 3; rowIndex++) {
      console.log(`Check each row.`);
    }
  }
}
