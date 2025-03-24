function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let seconds = 0;
    let j = i + 1;

    while (true) {
      if (j >= prices.length) break;

      seconds++;

      if (prices[j] < prices[i]) break;

      j++;
    }

    answer.push(seconds);
  }

  return answer;
}
