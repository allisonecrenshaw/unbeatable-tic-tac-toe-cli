export class Move {
    constructor(player, coordinate, board) {
        this.player = player;
        this.coordinate = coordinate;
        this.board = board;
    }

    isMoveCoordinateOccupiedInBoard() {
        console.log("Check here if move already has been made on this board.")
    }
}
