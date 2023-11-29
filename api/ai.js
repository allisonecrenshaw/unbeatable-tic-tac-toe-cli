import { Player } from "./player";

export class AI extends Player{
    takeTurn() {
        console.log(`\nIt's the computer's turn.`);
    }
}