function solution(x, y, n) {
  const visited = new Set([x]);
  const queue = [[x, 0]];
  let front = 0;

  while (front < queue.length) {
    const [current, count] = queue[front++];
    if (current === y) return count;

    const next = [current + n, current * 2, current * 3];

    for (const cal of next) {
      if (cal <= y && !visited.has(cal)) {
        visited.add(cal);
        queue.push([cal, count + 1]);
      }
    }
  }

  return -1;
}
