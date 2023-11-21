export class Board {
    initialize() {
        this.cells = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ];

        this.rowLabels = ["A", "B", "C"];
        this.won = false;
        this.winningSymbol = null;
        this.full = false;
    }

    display() {
        let line = "  -------------";
        let columnLabels = "    1   2   3";
        console.log();
        console.log(columnLabels);
        console.log(line);
        for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
            let thisRow = this.cells[rowIndex];
            console.log(
                this.rowLabels[rowIndex],
                "|",
                thisRow[0],
                "|",
                thisRow[1],
                "|",
                thisRow[2],
                "|"
            );
        }
        console.log(line);
    }

    update(move) {
        this.updateCells(move);
        this.setIsFull();
        this.updateWinState();
    }

    updateCells(move) {
        let x = move.coordinate.x;
        let y = move.coordinate.y;

        this.cells[x][y] = move.player.symbol;
    }

    setIsFull() {
        this.full = this.isFull();
    }

    isFull() {
        for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
            for (
                let columnIndex = 0;
                columnIndex < this.cells[rowIndex].length;
                columnIndex++
            ) {
                if (this.cells[rowIndex][columnIndex] == " ") {
                    return false;
                }
            }
        }
        return true;
    }

    updateWinState() {
        this.setWinningSymbol();

        if (this.winningSymbol != null) {
            this.won = true;
        }
    }

    setWinningSymbol() {
        let winningRowSymbol = this.getWinningRowSymbol();
        if (winningRowSymbol != null) {
            this.winningSymbol = winningRowSymbol;
            return;
        }

        let winningColumnSymbol = this.getWinningColumnSymbol();
        if (winningColumnSymbol != null) {
            this.winningSymbol = winningColumnSymbol;
            return;
        }

        let winningDiagonalSymbol = this.getWinningDiagonalSymbol();
        if (winningDiagonalSymbol != null) {
            this.winningSymbol = winningDiagonalSymbol;
            return;
        }

        return;
    }

    getWinningRowSymbol() {
        for (let rowIndex = 0; rowIndex < this.cells.length; rowIndex++) {
            if (
                this.cells[rowIndex][0] != " " &&
                this.cells[rowIndex][0] == this.cells[rowIndex][1] &&
                this.cells[rowIndex][1] == this.cells[rowIndex][2]
            ) {
                console.log("Returning winning row symbol.");
                return this.cells[rowIndex][0];
            }

            return null;
        }
    }

    getWinningColumnSymbol() {
        console.log("Under construction - getWinningColumn.");
    }

    getWinningDiagonalSymbol() {
        console.log("Under construction - getWinningDiagonal.");
    }

    cellIsEmpty(coordinate) {
        console.log("Will check if cell is empty.");
        return true;
    }
}
