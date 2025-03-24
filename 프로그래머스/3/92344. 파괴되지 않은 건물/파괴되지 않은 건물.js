function solution(board, skill) {
  const row = board.length;
  const col = board[0].length;
  const sumBoard = Array.from({ length: row + 1 }, () =>
    Array(col + 1).fill(0)
  );

  for (let i = 0; i < skill.length; i++) {
    const [type, r1, c1, r2, c2, degree] = skill[i];
    const value = type === 1 ? -degree : degree;

    sumBoard[r1][c1] += value;
    sumBoard[r1][c2 + 1] -= value;
    sumBoard[r2 + 1][c1] -= value;
    sumBoard[r2 + 1][c2 + 1] += value;
  }

  // 가로 누적합
  for (let i = 0; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      sumBoard[i][j] += sumBoard[i][j - 1];
    }
  }

  // 세로 누적합
  for (let j = 0; j <= col; j++) {
    for (let i = 1; i <= row; i++) {
      sumBoard[i][j] += sumBoard[i - 1][j];
    }
  }

  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] + sumBoard[i][j] > 0) count++;
    }
  }

  return count;
}
