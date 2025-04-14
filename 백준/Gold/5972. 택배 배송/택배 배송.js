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
  const [n, m] = input[0].split(" ").map(Number);
  const map = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b, cost] = input[i].split(" ").map(Number);
    map[a].push([b, cost]);
    map[b].push([a, cost]);
  }

  const distance = Array(n + 1).fill(Infinity);
  distance[1] = 0;

  const heap = new MinHeap();
  heap.push([0, 1]);

  while (!heap.isEmpty()) {
    const [curCost, curNode] = heap.pop();

    if (distance[curNode] < curCost) continue;

    for (let [next, nextCost] of map[curNode]) {
      const newCost = curCost + nextCost;
      if (newCost < distance[next]) {
        distance[next] = newCost;
        heap.push([newCost, next]);
      }
    }
  }

  return distance[n];
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
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
