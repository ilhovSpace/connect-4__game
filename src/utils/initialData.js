export const initializeBoard = () => {
  const board = []
  for (let i = 0; i < 42; i++) {
    board.push(0)
  }
  return board
}