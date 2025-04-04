function solution(n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  // dp[3] = 3;
  // dp[4] = 5;
  // dp[5] = 8;
  // dp[6] = 13;
  for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;

  return dp[n];
}