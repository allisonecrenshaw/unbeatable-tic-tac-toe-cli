import { Board } from './board.js';

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
    board.initialize();
  });

  describe('placeSymbol', () => {
    test('should place symbol in the correct cell', () => {
      // Arrange
      const move = { coordinate: { x: 0, y: 0 }, player: { symbol: 'X' } };

      // Act
      board.placeSymbol(move);

      // Assert
      expect(board.cells[0][0]).toBe('X');
    });

    test('should update the cell with the player symbol', () => {
      // Arrange
      const move = { coordinate: { x: 1, y: 2 }, player: { symbol: 'O' } };

      // Act
      board.placeSymbol(move);

      // Assert
      expect(board.cells[1][2]).toBe('O');
    });
  });

  describe('resetCell', () => {
    test('should reset the specified cell to empty', () => {
      // Arrange
      const coordinate = { x: 2, y: 1 };
      board.cells[2][1] = 'X'; // Set a symbol in the cell

      // Act
      board.resetCell(coordinate);

      // Assert
      expect(board.cells[2][1]).toBe(' ');
    });

    test('should reset the cell to empty even if it was already empty', () => {
      // Arrange
      const coordinate = { x: 0, y: 2 };

      // Act
      board.resetCell(coordinate);

      // Assert
      expect(board.cells[0][2]).toBe(' '); // Ensure it remains empty
    });
  });
});
