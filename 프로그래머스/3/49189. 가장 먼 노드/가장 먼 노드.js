function solution(n, edge) {
  const map = Array(n + 1).fill().map(() => []);
  for (let i = 0; i < edge.length; i++) {
    let a = edge[i][0];
    let b = edge[i][1];
    map[a].push(b);
    map[b].push(a);
  }

  const visited = Array(n + 1).fill(0);
  const q = [];
  q.push(1);
  visited[1] = 1;

  while (q.length > 0) {
    const now = q.shift();
    for (let i = 0; i < map[now].length; i++) {
      let next = map[now][i];
      if (visited[next] === 0) {
        visited[next] = visited[now] + 1;
        q.push(next);
      }
    }
  }

  let max = 0;
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] > max) {
      max = visited[i];
    }
  }

  let answer = 0;
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === max) {
      answer++;
    }
  }

  return answer;
}
