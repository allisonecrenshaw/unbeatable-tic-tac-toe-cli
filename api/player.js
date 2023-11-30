import { Move } from "./move.js";
import { Coordinate } from "./coordinate.js";
import * as readlineSync from "readline-sync";

export class Player {
	constructor(turnOrder, isAI, name) {
		this.turnOrder = turnOrder;

		if (turnOrder === 1) {
			this.symbol = "X";
		} else if (turnOrder === 2) {
			this.symbol = "O";
		} else {
			console.log("Invalid turn order.");
			process.exit(1);
		}

		this.isAI = isAI;

		if (isAI == true) {
			this.name = "The Computer";
		} else {
			this.name = name ?? `Player ${turnOrder}`;
		}
	}

	toString() {
		return `Player(name: ${this.name}, isAI: ${this.isAI}, playerOrder: ${this.playerOrder})`;
	}

	takeTurn(board) {
        console.log(`\nIt's ${this.name}'s turn.`);

        let coordinate = null;
        let move;
        let moveIsValid = false;
				let moveExecuted = false;
        
        while(!coordinate && moveIsValid === false) {
            const enteredCoordinate = readlineSync.question(
                "\nPlease enter the coordinate for your move (ex: A1): "
            );
            coordinate = new Coordinate(enteredCoordinate);
            
            if (coordinate) {
                move = new Move(this, coordinate, board);
								moveIsValid = move.coordinateIsEmpty();
								if (moveIsValid === true) {
									moveExecuted = board.executeMove(move);
								}
            }
        }

				return moveExecuted;
    }
}
