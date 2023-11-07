export class Coordinate {
    constructor(coordinate) {
        if (coordinate.length !== 2) {
            throw new Error(
                "Invalid coordinate: coordinate should only have two characters (ex: A1)"
            );
        }

        const [x, y] = coordinate.split("");
        this.validateCoordinate(x, y);

        this.x = this.transformXCoordinateIntoIndex(x);
        this.y = this.transformYCoordinateIntoIndex(y);
    }

    validateCoordinate(x, y) {
        if (!this.isXValid(x)) {
            throw new Error("Invalid coordinate: x value invalid.");
        }

        if (!this.isYValid(y)) {
            throw new Error("Invalid coordinate: y value invalid.");
        }
    }

    isXValid(x) {
        if (x == "A" || x == "B" || x == "C") {
            return true;
        }
        return false;
    }

    isYValid(y) {
        if (y == "1" || y == "2" || y == "3") {
            return true;
        }
        return false;
    }

    transformXCoordinateIntoIndex(coordinate) {
        if (coordinate == "A") {
            return 0;
        } else if (coordinate == "B") {
            return 1;
        } else if (coordinate == "C") {
            return 2;
        } else {
            throw new Error("Invalid coordinate: x value invalid.");
        }
    }

    transformYCoordinateIntoIndex(coordinate) {
        if (coordinate == "1") {
            return 0;
        } else if (coordinate == "2") {
            return 1;
        } else if (coordinate == "3") {
            return 2;
        } else {
            throw new Error("Invalid coordinate: y value invalid.");
        }
    }
}
