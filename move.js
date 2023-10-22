export class Move {
    constructor(player, coordinates) {
        const { isValid, row, column } = this.validateCoordinate(coordinates);

        if (!isValid) {
            throw new Error("Invalid coordinates.");
        }

        this.player = player;
        this.row = row;
        this.column = column;
    }

    isMoveValid(coordinates) {
        if (coordinates.length != 2) {
            return false;
        }

        const row = coordinates.charAt(0);
        const column = coordinates.charAt(1);

        const isValidRow = this.isRowValid(row);
        const isValidColumn = this.isColumnValid(column);

        return {
            isValid: isValidRow && isValidColumn,
            row,
            column,
        };
    }

    isRowValid(row) {
        if (row == "A" || row == "B" || row == "C") {
            return true;
        }
        return false;
    }

    isColumnValid(column) {
        if (column == "1" || column == "2" || column == "3") {
            return true;
        }
        return false;
    }
}
