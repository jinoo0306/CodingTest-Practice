function solution(triangle) {
  const dp = [...triangle[0]];

  for (let i = 1; i < triangle.length; i++) {
    const temp = [];
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) temp[j] = dp[j] + triangle[i][j];
      else if (j === triangle[i].length - 1) temp[j] = dp[j - 1] + triangle[i][j];
      else temp[j] = Math.max(dp[j - 1], dp[j]) + triangle[i][j];
    }
    dp.splice(0, dp.length, ...temp);
  }

  return Math.max(...dp);
}
