import { Player } from "./player";

export class AIPlayer extends Player{
    takeTurn() {
        console.log(`\nIt's the computer's turn.`);
    }
}