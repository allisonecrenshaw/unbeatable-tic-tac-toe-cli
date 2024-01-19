import { Coordinate } from './coordinate.js';

// Game Modes
export const COMPUTER_MODE = 'computer';
export const FRIEND_MODE = 'friend';
export const DEFAULT_GAME_MODE = COMPUTER_MODE;

// Board Constants
export const ROW_COUNT = 3;
export const COL_COUNT = 3;

// Coordinate Constants
export const CENTER = new Coordinate('index', [1, 1]);
export const TOP_LEFT_CORNER = new Coordinate('index', [0, 0]);
export const BOTTOM_LEFT_CORNER = new Coordinate('index', [0, 2]);
export const TOP_RIGHT_CORNER = new Coordinate('index', [2, 0]);
export const BOTTOM_RIGHT_CORNER = new Coordinate('index', [2, 2]);

// Other
export const MAX_INPUT_ATTEMPTS = 3;
