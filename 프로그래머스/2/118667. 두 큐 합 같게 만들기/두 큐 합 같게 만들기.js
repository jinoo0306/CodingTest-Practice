function solution(queue1, queue2) {
  const totalLength = queue1.length + queue2.length;
  const merged = [...queue1, ...queue2];

  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);
  const target = (sum1 + sum2) / 2;

  if ((sum1 + sum2) % 2 !== 0) return -1;

  let p1 = 0; 
  let p2 = queue1.length; 
  let moveCount = 0;

  while (moveCount <= totalLength * 3) {
    if (sum1 === target) return moveCount;

    if (sum1 > target) {
      sum1 -= merged[p1];
      p1++;
    } else {
      sum1 += merged[p2];
      p2++;
    }

    moveCount++;
  }

  return -1;
}
