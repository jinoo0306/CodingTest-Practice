const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const [v, e] = input[0].split(" ").map(Number);
  const start = Number(input[1]);

  const graph = Array.from({ length: v + 1 }, () => []);
  for (let i = 2; i < 2 + e; i++) {
    const [u, w, cost] = input[i].split(" ").map(Number);
    graph[u].push([w, cost]);
  }

  const distance = Array(v + 1).fill(Infinity);
  distance[start] = 0;

  const pq = new MinHeap();
  pq.push([0, start]); // [비용, 노드]

  while (!pq.isEmpty()) {
    const [dist, now] = pq.pop();

    if (distance[now] < dist) continue;

    for (const [next, cost] of graph[now]) {
      const newDist = dist + cost;
      if (newDist < distance[next]) {
        distance[next] = newDist;
        pq.push([newDist, next]);
      }
    }
  }

  const answer = [];
  for (let i = 1; i <= v; i++) {
    answer.push(distance[i] === Infinity ? "INF" : distance[i]);
  }

  return answer.join("\n");
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p][0] <= this.heap[i][0]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (true) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;
      let smallest = i;

      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }

    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

console.log(solution(input));
