import { Player } from './player.js';

export class AIPlayer extends Player {
  constructor(turnOrder) {
    super(turnOrder, true, 'The Computer');
  }

  getUnoccupiedCellCoordinates(board) {
    console.log(`Getting available coordinates.`);
    for (let rowIndex = 0; rowIndex <= 3; rowIndex++) {
      console.log(`Check each row.`);
    }
  }
}
