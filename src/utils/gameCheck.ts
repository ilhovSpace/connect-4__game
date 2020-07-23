export const findLowestEmptyIndex = (board: number[], column: number) => {
  for (let i = 35 + column; i >= 0; i -= 7) {
    if (board[i] === 0) return i;
  }
  return -1;
};

let count = -0.54;
export const countDelay = (reset?: any) => {
  if (reset) {
    count = -0.54;
  }
  count = count + 0.27;
  return count;
};

export const checkWinningSlice = (miniBoard: number[]) => {
  if (miniBoard.some((cell) => cell === 0)) return false;
  if (
    miniBoard[0] === miniBoard[1] &&
    miniBoard[1] === miniBoard[2] &&
    miniBoard[2] === miniBoard[3]
  ) {
    return miniBoard[1];
  }
};

export const getGameState = (board: number[]) => {
  //hor
  for (let i = 0; i < board.length; i += 7) {
    const boardRow = board.slice(i, i + 7);
    for (let r = 0; r <= 4; r++) {
      const rowSlice = boardRow.slice(r, r + 4);
      const result = checkWinningSlice(rowSlice);
      if (result) {
        return `Выиграл игрок ${result}. Он собрал 4 по горизонтали`;
      }
    }
  }

  //ver
  for (let r = 0; r <= 2; r++) {
    for (let c = 0; c < 7; c++) {
      const index = r * 7 + c;
      const boardColm = [
        board[index],
        board[index + 7],
        board[index + 7 * 2],
        board[index + 7 * 3],
      ];

      const result = checkWinningSlice(boardColm);
      if (result) {
        return `Выиграл игрок ${result}. Он собрал 4 по вертикали`;
      }
    }
  }

  //diag
  for (let r = 0; r <= 2; r++) {
    for (let c = 0; c < 7; c++) {
      const index = r * 7 + c;

      if (c >= 3) {
        const boardSlice = [
          board[index],
          board[index + 7 - 1],
          board[index + 7 * 2 - 2],
          board[index + 7 * 3 - 3],
        ];

        const result = checkWinningSlice(boardSlice);
        if (result) {
          return `Выиграл игрок ${result}. Он собрал 4 по диагонали`;
        }
      }
      if (c <= 3) {
        const boardSlice = [
          board[index],
          board[index + 7 + 1],
          board[index + 7 * 2 + 2],
          board[index + 7 * 3 + 3],
        ];

        const result = checkWinningSlice(boardSlice);
        if (result) {
          return `Выиграл игрок ${result}. Он собрал 4 по диагонали`;
        }
      }
    }
  }
};
