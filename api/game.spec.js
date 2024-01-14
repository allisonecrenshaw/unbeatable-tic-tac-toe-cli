import { Game } from './game.js';

describe('Game', () => {
  test('should switch player from player1 to player2', () => {
    // Arrange
    const game = new Game();
    game.player1 = 'Alice';
    game.player2 = 'Bob';
    game.currentPlayer = game.player1;

    // Act
    const result = game.switchPlayer();

    // Assert
    expect(result).toBe(game.player2);
  });

  // Test case 2: Switching player from player2 to player1
  test('should switch player from player2 to player1', () => {
    // Arrange
    const game = new Game();
    game.player1 = 'Alice';
    game.player2 = 'Bob';
    game.currentPlayer = game.player2;

    // Act
    const result = game.switchPlayer();

    // Assert
    expect(result).toBe(game.player1);
  });
});
