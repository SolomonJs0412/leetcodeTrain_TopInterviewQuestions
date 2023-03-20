/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    const rows = [], cols = [], boxes = [];
    for (let i = 0; i < board.length; i++) {
        rows.push(new Set());
        cols.push(new Set());
        boxes.push(new Set());
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if (cell === ".") continue;
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxNumber].has(cell)) return false;
            rows[i].add(cell);
            cols[j].add(cell);
            boxes[boxNumber].add(cell);
        }
    }
    return true;
};

let board =
    [[".", ".", ".", ".", "5", ".", ".", "1", "."], [".", "4", ".", "3", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "3", ".", ".", "1"], ["8", ".", ".", ".", ".", ".", ".", "2", "."], [".", ".", "2", ".", "7", ".", ".", ".", "."], [".", "1", "5", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", "2", ".", ".", "."], [".", "2", ".", "9", ".", ".", ".", ".", "."], [".", ".", "4", ".", ".", ".", ".", ".", "."]]

console.log(isValidSudoku(board))