export class Player {
  constructor(turnOrder, isAI, name) {
    this.turnOrder = turnOrder;

    if (turnOrder === 1) {
      this.symbol = 'X';
    } else if (turnOrder === 2) {
      this.symbol = 'O';
    } else {
      console.log('Invalid turn order.');
      process.exit(1);
    }

    this.isAI = isAI;
    this.name = name ?? `Player ${turnOrder}`;
  }

  toString() {
    return `Player(name: ${this.name}, isAI: ${this.isAI}, playerOrder: ${this.playerOrder})`;
  }
}
