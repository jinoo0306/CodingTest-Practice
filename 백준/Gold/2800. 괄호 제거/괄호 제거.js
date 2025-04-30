const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : require("path").join(__dirname, "input.txt"),
    "utf8"
  )
  .trim();

const LEFT_PAREN = "(";
const RIGHT_PAREN = ")";

function solution(expr) {
  const stack = [];
  const pairs = [];

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === LEFT_PAREN) {
      stack.push(i);
    } else if (expr[i] === RIGHT_PAREN) {
      const openIdx = stack.pop();
      pairs.push([openIdx, i]);
    }
  }

  const results = new Set();
  const total = pairs.length;

  const dfs = (depth, selected) => {
    if (depth === total) {
      if (selected.length === 0) return;

      const toRemove = new Set(selected.flat());
      let str = "";
      for (let i = 0; i < expr.length; i++) {
        if (!toRemove.has(i)) {
          str += expr[i];
        }
      }
      results.add(str);
      return;
    }

    dfs(depth + 1, [...selected, pairs[depth]]);
    dfs(depth + 1, selected);
  };

  dfs(0, []);

  const sorted = [...results].sort();
  return sorted.join("\n");
}

console.log(solution(input));
