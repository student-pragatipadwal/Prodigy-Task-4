function solveSudoku(sudokuGrid) {
    const EMPTY_CELL = 0;

    function isValidPlacement(number, row, col) {
        for (let i = 0; i < 9; i++) {
            if (
                sudokuGrid[row][i] === number ||
                sudokuGrid[i][col] === number
            ) {
                return false;
            }
        }

        const boxStartRow = Math.floor(row / 3) * 3;
        const boxStartCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (sudokuGrid[boxStartRow + i][boxStartCol + j] === number) {
                    return false;
                }
            }
        }

        return true;
    }

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (sudokuGrid[row][col] === EMPTY_CELL) {
                    for (let number = 1; number <= 9; number++) {
                        if (isValidPlacement(number, row, col)) {
                            sudokuGrid[row][col] = number;
                            if (solve()) {
                                return true;
                            }
                            sudokuGrid[row][col] = EMPTY_CELL; // Backtrack
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    if (solve()) {
        return sudokuGrid;
    } else {
        return "No solution exists.";
    }
}
const unsolvedGrid1 = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
const unsolvedGrid2 = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
const unsolvedGrid3 = [
    [0, 8, 3, 9, 0, 0, 0, 7, 0],
    [0, 0, 7, 0, 5, 0, 0, 0, 2],
    [9, 0, 1, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 0],
    [0, 0, 5, 3, 0, 7, 1, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 9, 0, 7],
    [8, 0, 0, 0, 3, 0, 2, 0, 0],
    [0, 3, 0, 0, 0, 5, 8, 1, 0],
];

console.log("The 1 Solution:", solveSudoku(unsolvedGrid1));
console.log("The 2 Solution:", solveSudoku(unsolvedGrid2));
console.log("The 3 Solution:", solveSudoku(unsolvedGrid3));