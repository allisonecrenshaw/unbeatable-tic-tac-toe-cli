export class Move {
    constructor(player, coordinate, board) {
        this.player = player;
        this.coordinate = coordinate;
        this.board = board;
    }

    isMoveValid() {
        if (this.board.cellIsEmpty(this.coordinate)) {
            return true;
        }
        return false;
    }
}
